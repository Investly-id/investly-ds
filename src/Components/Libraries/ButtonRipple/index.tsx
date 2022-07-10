// @ts-nocheck
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {
  Animated,
  Easing,
  I18nManager,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { radius, styles } from './styles.js'

class Ripple extends PureComponent {
  static defaultProps = {
    ...TouchableWithoutFeedback.defaultProps,

    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,

    onRippleAnimation: (animation, callback) => animation.start(callback),
  }

  static propTypes = {
    ...Animated.View.propTypes,
    ...TouchableWithoutFeedback.propTypes,

    rippleColor: PropTypes.string,
    rippleOpacity: PropTypes.number,
    rippleDuration: PropTypes.number,
    rippleSize: PropTypes.number,
    rippleContainerBorderRadius: PropTypes.number,
    rippleCentered: PropTypes.bool,
    rippleSequential: PropTypes.bool,
    rippleFades: PropTypes.bool,
    disabled: PropTypes.bool,

    onRippleAnimation: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.onLayout = this.onLayout.bind(this)
    this.onPress = this.onPress.bind(this)
    this.onPressIn = this.onPressIn.bind(this)
    this.onPressOut = this.onPressOut.bind(this)
    this.onLongPress = this.onLongPress.bind(this)
    this.onAnimationEnd = this.onAnimationEnd.bind(this)

    this.renderRipple = this.renderRipple.bind(this)

    this.unique = 0
    this.mounted = false

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  onLayout(event) {
    let { width, height } = event.nativeEvent.layout
    let { onLayout } = this.props

    if (typeof onLayout === 'function') {
      onLayout(event)
    }

    this.setState({ width, height })
  }

  onPress(event) {
    let { ripples } = this.state
    let { onPress, rippleSequential } = this.props

    if (!rippleSequential || !ripples.length) {
      if (typeof onPress === 'function') {
        requestAnimationFrame(() => onPress(event))
      }

      this.startRipple(event)
    }
  }

  onLongPress(event) {
    let { onLongPress } = this.props

    if (typeof onLongPress === 'function') {
      requestAnimationFrame(() => onLongPress(event))
    }

    this.startRipple(event)
  }

  onPressIn(event) {
    let { onPressIn } = this.props

    if (typeof onPressIn === 'function') {
      onPressIn(event)
    }
  }

  onPressOut(event) {
    let { onPressOut } = this.props

    if (typeof onPressOut === 'function') {
      onPressOut(event)
    }
  }

  onAnimationEnd() {
    if (this.mounted) {
      this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }))
    }
  }

  startRipple(event) {
    let { width, height } = this.state
    let { rippleDuration, rippleCentered, rippleSize, onRippleAnimation } =
      this.props

    let w2 = 0.5 * width
    let h2 = 0.5 * height

    let locationX = w2
    let locationY = h2

    if (!rippleCentered) {
      const { nativeEvent } = event

      locationX = nativeEvent.locationX ?? nativeEvent.layerX
      locationY = nativeEvent.locationY ?? nativeEvent.layerY
    }

    let offsetX = Math.abs(w2 - locationX)
    let offsetY = Math.abs(h2 - locationY)

    let R =
      rippleSize > 0
        ? 0.5 * rippleSize
        : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2))

    let ripple = {
      unique: this.unique++,
      progress: new Animated.Value(0),
      locationX,
      locationY,
      R,
    }

    let animation = Animated.timing(ripple.progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    })

    onRippleAnimation(animation, this.onAnimationEnd)

    this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }))
  }

  renderRipple({ unique, progress, locationX, locationY, R }) {
    let { rippleColor, rippleOpacity, rippleFades } = this.props

    let rippleStyle = {
      top: locationY - radius,
      [I18nManager.isRTL ? 'right' : 'left']: locationX - radius,
      backgroundColor: rippleColor,

      transform: [
        {
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5 / radius, R / radius],
          }),
        },
      ],

      opacity: rippleFades
        ? progress.interpolate({
            inputRange: [0, 1],
            outputRange: [rippleOpacity, 0],
          })
        : rippleOpacity,
    }

    return <Animated.View style={[styles.ripple, rippleStyle]} key={unique} />
  }

  render() {
    let { ripples } = this.state
    let {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      children,
      rippleContainerBorderRadius,
      testID,
      nativeID,
      accessible,
      accessibilityHint,
      accessibilityLabel,

      onPress,
      onLongPress,
      onLayout,
      onRippleAnimation,

      rippleColor,
      rippleOpacity,
      rippleDuration,
      rippleSize,
      rippleCentered,
      rippleSequential,
      rippleFades,

      ...props
    } = this.props

    let touchableProps = {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      testID,
      accessible,
      accessibilityHint,
      accessibilityLabel,
      onLayout: this.onLayout,
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut,
      onLongPress: onLongPress ? this.onLongPress : undefined,

      ...(Platform.OS !== 'web' ? { nativeID } : null),
    }

    let containerStyle = {
      borderRadius: rippleContainerBorderRadius,
    }

    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <Animated.View {...props} pointerEvents='box-only'>
          {children}
          <View style={[styles.container, containerStyle]}>
            {ripples.map(this.renderRipple)}
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

export default React.memo(Ripple)
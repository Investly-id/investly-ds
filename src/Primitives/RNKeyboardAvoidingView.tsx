// import { useHeaderHeight } from '@react-navigation/elements'
import React, { useRef } from 'react'
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<KeyboardAvoidingViewProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNKeyboardAvoidingView = (props: Props) => {
  // const headerHeight = useHeaderHeight()
  const headerHeight = 80
  const style = React.useMemo(() => getTwStyle(props.style), [props])
  const contentStyle = React.useMemo(
    () => getTwStyle(props.contentContainerStyle),
    [props]
  )
  const enableKeyboardAvoidingView = useRef(Platform.OS === 'ios').current
  const keyboardVerticalOffset = React.useMemo(() => {
    return Platform.OS === 'ios' ? headerHeight + 20 : 0
  }, [headerHeight])

  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled={enableKeyboardAvoidingView}
      keyboardVerticalOffset={keyboardVerticalOffset}
      {...props}
      style={style}
      contentContainerStyle={contentStyle}
    />
  )
}

RNKeyboardAvoidingView.defaultProps = {
  style: undefined,
}

export default React.memo(RNKeyboardAvoidingView)

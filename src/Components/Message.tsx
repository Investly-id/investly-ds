import React, { useMemo, useCallback, useState } from 'react'
import { ViewStyle, StyleProp } from 'react-native'
import { colors } from '../Styles'
import { ColorVariant } from '../Types/Component'
import ButtonLink from './ButtonLink'
import Icon, { IconName } from './Icon'
import { RNText, RNTouchableOpacity, RNView } from '../Primitives'

interface Props {
  variant?: ColorVariant
  containerStyle?: StyleProp<ViewStyle> | string
  children?: React.ReactNode | string
  leftIcon?: IconName
  rightIcon?: IconName
  buttonText?: string
  buttonOnPress?: () => void
}

const Message: React.FC<Props> = ({
  containerStyle,
  children,
  leftIcon,
  rightIcon,
  variant,
  buttonText,
  buttonOnPress,
}) => {
  const [show, setShow] = useState(true)
  const renderIcon = useCallback(
    (position: 'left' | 'right') => {
      const iconPropsMap = {
        left: leftIcon,
        right: rightIcon,
      }
      const iconStyleMap = {
        left: 'pr-2',
        right: 'pl-2',
      }

      const iconProps = iconPropsMap[position]
      const wrapperStyle = iconStyleMap[position]

      return (
        <RNView style={wrapperStyle}>
          <Icon name={iconProps!} size={24} fill={colors[variant!][600]} />
        </RNView>
      )
    },
    [variant, leftIcon, rightIcon],
  )

  const content = useMemo(() => {
    if (typeof children === 'string') {
      return (
        <RNView style={`flex-row ${buttonText ? '' : 'items-center'}`}>
          {leftIcon && renderIcon('left')}
          <RNView style="fill items-start">
            <RNText
              style={'font-inter-regular text-3 leading-5 text-neutral-700'}
            >
              {children}
            </RNText>
            {!!buttonText && (
              <ButtonLink
                variant={variant}
                onPress={buttonOnPress}
                style="mt-1"
                size="sm"
              >
                {buttonText}
              </ButtonLink>
            )}
          </RNView>
          {/* TODO: Cross Icon */}
          {rightIcon && (
            <RNTouchableOpacity onPress={() => setShow(false)}>
              {renderIcon('right')}
            </RNTouchableOpacity>
          )}
        </RNView>
      )
    }

    return children
  }, [
    children,
    leftIcon,
    rightIcon,
    renderIcon,
    buttonText,
    buttonOnPress,
    variant,
  ])

  if (!show) {
    return null
  }
  return (
    <RNView style={`bg-${variant}-100 py-3 px-4 ` + (containerStyle ?? '')}>
      <RNView>{content}</RNView>
    </RNView>
  )
}

Message.defaultProps = {
  containerStyle: '',
  children: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  variant: 'purple',
  buttonText: undefined,
  buttonOnPress: undefined,
}

export default React.memo(Message)

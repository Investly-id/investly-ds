import React, { useCallback } from 'react'
import { StyleProp, TextStyle } from 'react-native'

import { RNView } from '../../Primitives'
import { colors } from '../../Styles'
import { InputFieldSize } from '../../Types/Component'
import { getTwStyle } from '../../Utils'
import Icon, { IconName } from '../Icon'

interface IconProps {
  fill?: string
  size?: number
  padding?: number
}

type InputFieldStyle = {
  focus: boolean
  error: string
  multiline?: boolean
  containerStyle?: StyleProp<TextStyle> | string
  disabled?: boolean
  leftIcon?: IconName | ((props: IconProps) => React.ReactNode)
  rightIcon?:
    | IconName
    | ((props: IconProps & { padding: number }) => React.ReactNode)
  size?: InputFieldSize
  secure: boolean
  value: string
}

const styleConfig = {
  inputWrapper: {
    sm: '',
    md: '',
  },
  input: {
    // sm: 'text-[12px]',
    sm: 'py-[6px] text-[12px] leading-[15px]',
    md: 'py-[9px] text-[14px]',
  },
  inputText: {
    sm: 'text-[12px]',
    md: 'text-[14px]',
  },
  iconSize: {
    sm: 12,
    md: 16,
  },
}

export const useInputFieldStyle = ({
  focus,
  error,
  multiline,
  containerStyle,
  disabled,
  leftIcon,
  rightIcon,
  size,
  secure,
  value,
}: InputFieldStyle) => {
  const textInputWrapperStyle = React.useMemo(() => {
    let style =
      'px-4 border border-neutral-300 bg-neutral-200 flex-row rounded-full items-center '
    if (focus) {
      style += ' bg-purple-100 border-purple-600 '
    }
    if (error) {
      style += ' bg-red-100 border-red-600 '
    }
    if (multiline) {
      style += size === 'md' ? ' rounded-6 ' : ' rounded-5 '
    }
    return style + styleConfig.inputWrapper[size ?? 'md']
  }, [focus, error, size, multiline])

  const textInputStyle = React.useMemo(() => {
    let style = 'fill border-0 items-center font-inter-regular '
    if (multiline) {
      style += ' h-[84px] '
    }
    if (secure) {
      style += value ? ' tracking-[2px] ' : ''
    }
    return style + styleConfig.input[size ?? 'md']
  }, [secure, multiline, size, value])

  const textStyle = React.useMemo(() => {
    let style = 'text-neutral-700 font-inter-regular '
    if (disabled) {
      style += ' text-neutral-400 '
    }
    return style + styleConfig.inputText[size ?? 'md']
  }, [size, disabled])

  const memoContainerStyle = React.useMemo(() => {
    return [getTwStyle(containerStyle)]
  }, [containerStyle])

  const renderIcon = useCallback(
    (position: 'left' | 'right') => {
      if (
        (position === 'left' && !leftIcon) ||
        (position === 'right' && !rightIcon)
      ) {
        return
      }
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
      const iconSize = styleConfig.iconSize[size ?? 'md']
      const iconColor = colors.neutral[disabled ? 400 : 500]
      const iconPadding = size === 'md' ? 9 : 6
      return (
        <RNView style={wrapperStyle}>
          {typeof iconProps === 'string' ? (
            <Icon name={iconProps!} size={iconSize} fill={iconColor} />
          ) : (
            iconProps?.({
              size: iconSize,
              fill: iconColor,
              padding: iconPadding,
            })
          )}
        </RNView>
      )
    },
    [leftIcon, rightIcon, size, disabled]
  )

  return {
    textInputWrapperStyle,
    textInputStyle,
    memoContainerStyle,
    renderIcon,
    textStyle,
  }
}

export const useInputFieldLogic = () => {}

import React, { useCallback } from 'react'
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native'

import { RNText, RNTouchableOpacity, RNView } from '../Primitives'
import { colors } from '../Styles'
import { ButtonSize, ColorVariant } from '../Types/Component'
import { getTwStyle } from '../Utils'
import Icon, { IconName } from './Icon'

interface IconProps {
  fill?: string
  size?: number
}

interface Props {
  variant?: ColorVariant
  size?: ButtonSize
  onPress?: (value?: any) => void
  style?: StyleProp<ViewStyle> | string
  loading?: boolean
  disabled?: boolean
  children?: React.ReactNode | string
  leftIcon?: IconName | ((props: IconProps) => React.ReactNode)
  rightIcon?: IconName | ((props: IconProps) => React.ReactNode)
}

const ButtonLink: React.FC<Props> = ({
  size,
  onPress,
  style,
  loading,
  disabled,
  children,
  leftIcon,
  rightIcon,
  variant,
}) => {
  const iconSize = React.useMemo(() => {
    const sizeMap: { [key: string]: number } = {
      sm: 12,
      md: 16,
      lg: 20,
    }
    return sizeMap[size ?? 'md']
  }, [size])

  const typographyProps = React.useMemo(() => {
    let color = disabled
      ? colors.neutral[400]
      : colors[variant ?? 'purple'][600]

    const prop: Record<ButtonSize, string> = {
      sm: 'text-3 leading-[20px]',
      md: 'text-[14px] leading-[22px]',
      lg: 'text-4 leading-[24px]',
    }

    return {
      color,
      ...getTwStyle(prop[size! || 'md']),
      ...getTwStyle('font-inter-bold'),
    }
  }, [variant, size, disabled])

  const touchableStyle = React.useMemo(() => {
    return [getTwStyle('rounded-full justify-center'), getTwStyle(style)]
  }, [style])

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
          {typeof iconProps === 'string' ? (
            <Icon
              name={iconProps}
              size={iconSize}
              fill={typographyProps.color}
            />
          ) : (
            iconProps?.({
              fill: typographyProps.color,
              size: iconSize,
            })
          )}
        </RNView>
      )
    },
    [typographyProps.color, iconSize, leftIcon, rightIcon]
  )

  const loadingSize = React.useMemo(() => {
    const sizes: { [key: string]: number } = {
      sm: 20,
      md: 22,
      lg: 24,
    }
    return sizes[size ?? 'md']
  }, [size])

  const content = React.useMemo(() => {
    if (typeof children === 'string') {
      return (
        <RNView style={'flex-row justify-center items-center'}>
          {loading && (
            <ActivityIndicator
              size={loadingSize}
              color={typographyProps.color}
            />
          )}
          {leftIcon && !loading && renderIcon('left')}
          {!loading && (
            <RNText style={typographyProps} numberOfLines={1}>
              {children}
            </RNText>
          )}
          {rightIcon && !loading && renderIcon('right')}
        </RNView>
      )
    }

    if (children) {
      return children
    }

    return <RNView />
  }, [
    children,
    loading,
    leftIcon,
    rightIcon,
    renderIcon,
    typographyProps,
    loadingSize,
  ])

  return (
    <RNTouchableOpacity
      activeOpacity={0.5}
      style={touchableStyle}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {content}
    </RNTouchableOpacity>
  )
}

ButtonLink.defaultProps = {
  onPress: () => null,
  style: {},
  loading: false,
  disabled: false,
  children: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  variant: 'purple',
  size: 'md',
}

export default React.memo(ButtonLink)

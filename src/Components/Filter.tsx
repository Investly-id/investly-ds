import React, { useCallback } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { RNText, RNView } from '../Primitives'
import { colors } from '../Styles'
import { ColorVariant, ControlSize } from '../Types/Component'
import { getTwStyle } from '../Utils'
import Icon, { IconName } from './Icon'
import Ripple from './Libraries/ButtonRipple'

interface Props {
  active?: boolean
  variant?: ColorVariant
  size?: ControlSize
  onPress?: (value?: any) => void
  style?: StyleProp<ViewStyle> | string
  disabled?: boolean
  children?: React.ReactNode | string
  leftIcon?: IconName
  rightIcon?: IconName
}

const Filter: React.FC<Props> = ({
  active,
  size,
  onPress,
  style,
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
    }
    return sizeMap[size ?? 'md']
  }, [size])

  const typographyProps = React.useMemo(() => {
    let color = colors.neutral[700]
    if (active) {
      color = 'white'
    } else if (disabled) {
      color = colors.neutral[400]
    }

    const prop: Record<ControlSize, string> = {
      sm: 'text-3 leading-[20px]',
      md: 'text-[14px] leading-[22px]',
    }

    return {
      color,
      ...getTwStyle(prop[size! || 'md']),
      ...getTwStyle('font-inter-bold'),
    }
  }, [size, active, disabled])

  const rippleStyle = React.useMemo(() => {
    const styleSize: { [key: string]: string } = {
      sm: 'py-[6px]',
      md: 'py-[9px]',
    }

    return [
      getTwStyle(styleSize[size ?? 'md']),
      getTwStyle('rounded-full justify-center px-4'),
      getTwStyle(
        active
          ? disabled
            ? 'bg-neutral-400 border-neutral-400'
            : `bg-${variant}-600 border-${variant}-600`
          : 'border border-neutral-300'
      ),
      getTwStyle(style),
    ]
  }, [size, style, active, variant, disabled])

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
          <Icon
            name={iconProps!}
            size={iconSize}
            fill={typographyProps.color}
          />
        </RNView>
      )
    },
    [typographyProps.color, iconSize, leftIcon, rightIcon]
  )

  const content = React.useMemo(() => {
    if (typeof children === 'string') {
      return (
        <RNView style={'flex-row justify-center items-center'}>
          {leftIcon && renderIcon('left')}
          <RNText style={typographyProps} numberOfLines={1}>
            {children}
          </RNText>
          {rightIcon && renderIcon('right')}
        </RNView>
      )
    }

    return children
  }, [children, leftIcon, rightIcon, renderIcon, typographyProps])

  return (
    <Ripple
      rippleContainerBorderRadius={99}
      style={rippleStyle}
      onPress={onPress}
      disabled={disabled}
      rippleColor={colors[variant ?? 'purple'][400]}
    >
      {content}
    </Ripple>
  )
}

Filter.defaultProps = {
  onPress: () => null,
  style: {},
  disabled: false,
  children: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  variant: 'purple',
  size: 'md',
  active: true,
}

export default React.memo(Filter)

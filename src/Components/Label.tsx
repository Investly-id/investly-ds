import React, { useMemo, useCallback } from 'react'
import { ViewStyle, StyleProp } from 'react-native'
import { colors } from '../Styles'
import { getTwStyle } from '../Utils'
import { ColorVariant } from '../Types/Component'
import Icon, { IconName } from './Icon'
import { RNText, RNView } from '../Primitives'

interface Props {
  variant?: ColorVariant
  size?: 'xs' | 'sm' | 'md'
  containerStyle?: StyleProp<ViewStyle> | string
  filled?: boolean
  children?: React.ReactNode | string
  leftIcon?: IconName
  rightIcon?: IconName
}

const Label: React.FC<Props> = ({
  size,
  containerStyle,
  filled,
  children,
  leftIcon,
  rightIcon,
  variant,
}) => {
  const iconSize = useMemo(() => {
    const sizeMap: { [key: string]: number } = {
      sm: 12,
      md: 16,
    }
    return sizeMap[size ?? 'md']
  }, [size])

  const typographyProps = useMemo(() => {
    let color = 'white'
    if (!filled) {
      color = colors[variant ?? 'purple'][500]
    }

    const prop: Record<'xs' | 'sm' | 'md', string> = {
      xs: 'text-[10px] leading-[12px]',
      sm: 'text-3 leading-[20px]',
      md: 'text-[14px] leading-[22px]',
    }

    return {
      color,
      ...getTwStyle(prop[size! || 'md']),
      ...getTwStyle('font-inter-bold'),
    }
  }, [size, filled, variant])

  const rippleStyle = useMemo(() => {
    const styleSize: { [key: string]: string } = {
      xs: 'py-[0px] px-[10px]',
      sm: 'py-[0px] px-3',
      md: 'py-[1px] px-4',
    }

    return [
      getTwStyle(styleSize[size ?? 'md']),
      getTwStyle('rounded-full justify-center'),
      getTwStyle(!filled ? `bg-${variant}-100` : `bg-${variant}-600`),
    ]
  }, [size, variant, filled])

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
    [typographyProps.color, iconSize, leftIcon, rightIcon],
  )

  const content = useMemo(() => {
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
    <RNView style={'flex-row ' + (containerStyle ?? '')}>
      <RNView style={rippleStyle}>{content}</RNView>
    </RNView>
  )
}

Label.defaultProps = {
  containerStyle: '',
  filled: true,
  children: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  variant: 'purple',
  size: 'md',
}

export default React.memo(Label)

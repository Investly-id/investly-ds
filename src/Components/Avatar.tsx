import React from 'react'
import {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native'

import { RNImage, RNView } from '../Primitives'
import { AvatarSize } from '../Types/Component'
import { getTwStyle } from '../Utils'
import Icon from './Icon'

interface Props extends Omit<ImageProps, 'style' | 'source'> {
  size?: AvatarSize
  style?: StyleProp<ImageStyle> | string
  source?: ImageSourcePropType
  url?: string
}

const Button: React.FC<Props> = ({ size, style, source, url, ...props }) => {
  const imageStyle = React.useMemo(() => {
    let sizeMap: Record<AvatarSize, string> = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-13 h-13',
      xxl: 'w-16 h-16',
    }

    return [
      getTwStyle(sizeMap[size ?? 'md']),
      getTwStyle(style),
      getTwStyle('rounded-full bg-purple-600 items-center justify-center'),
    ]
  }, [size, style])

  const iconSize = React.useMemo(() => {
    let sizeMap: Record<AvatarSize, number> = {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 32,
    }

    return sizeMap[size ?? 'md']
  }, [size])

  const imageSource = React.useMemo(() => {
    return url ? { uri: url } : source
  }, [source, url])

  if (!imageSource) {
    return (
      <RNView style={imageStyle}>
        <Icon name='user' fill='white' size={iconSize} />
      </RNView>
    )
  }
  return <RNImage style={imageStyle} source={imageSource!} {...props} />
}

Button.defaultProps = {
  style: {},
  size: 'md',
  source: undefined,
  url: undefined,
}

export default React.memo(Button)

import React from 'react'
import {
  ImageBackground,
  ImageBackgroundProps,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<ImageBackgroundProps, 'style' | 'imageStyle'> {
  imageStyle?: StyleProp<ImageStyle> | string
  style?: StyleProp<ViewStyle> | string
  children?: React.ReactNode
}

const RNImageBg = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props.style])
  const imageStyle = React.useMemo(
    () => getTwStyle(props.imageStyle),
    [props.imageStyle]
  )

  return <ImageBackground {...props} style={style} imageStyle={imageStyle} />
}

RNImageBg.defaultProps = {
  style: undefined,
  children: undefined,
  imageStyle: undefined,
}

export default React.memo(RNImageBg)

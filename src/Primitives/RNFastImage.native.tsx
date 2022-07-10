import React, { useMemo } from 'react'
import { ImageStyle, StyleProp } from 'react-native'
import FastImage, { FastImageProps } from 'react-native-fast-image'

import { getTwStyle } from '../Utils'

interface Props extends Omit<FastImageProps, 'style'> {
  style?: StyleProp<ImageStyle> | string
}

const RNImage = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <FastImage {...props} style={style} />
}

RNImage.defaultProps = {
  style: undefined,
}

export default React.memo(RNImage)

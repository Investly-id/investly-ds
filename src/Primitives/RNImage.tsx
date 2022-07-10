import React, { useMemo } from 'react'
import { Image, ImageProps, ImageStyle, StyleProp } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<ImageProps, 'style'> {
  style?: StyleProp<ImageStyle> | string
}

const RNImage = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <Image {...props} style={style} />
}

RNImage.defaultProps = {
  style: undefined,
}

export default React.memo(RNImage)

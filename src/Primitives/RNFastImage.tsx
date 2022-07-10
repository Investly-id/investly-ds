import React, { useMemo } from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<Image, 'style'> {
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

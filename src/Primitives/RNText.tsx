import React, { useMemo } from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<TextProps, 'style'> {
  style?: StyleProp<TextStyle> | string
}

export type RNTextProps = Props

const RNText = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <Text {...props} style={style} />
}

RNText.defaultProps = {
  style: undefined,
}

export default React.memo(RNText)

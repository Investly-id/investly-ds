import React from 'react'
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<TouchableOpacityProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

export type RNTouchableOpacityProp = Props

const RNTouchableOpacity = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])

  return <TouchableOpacity {...props} style={style} />
}

RNTouchableOpacity.defaultProps = {
  style: undefined,
}

export default React.memo(RNTouchableOpacity)

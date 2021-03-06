import React from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { getTwColor, getTwStyle } from '../Utils'

interface Props extends Omit<ActivityIndicatorProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNActivityIndicator = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])
  const color = React.useMemo(() => getTwColor(props.color as string), [props])

  return <ActivityIndicator {...props} style={style} color={color} />
}

RNActivityIndicator.defaultProps = {
  style: undefined,
}

export default React.memo(RNActivityIndicator)

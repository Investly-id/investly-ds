import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Ripple, { RippleProps } from 'react-native-material-ripple'

import { getTwStyle } from '../Utils'

interface Props extends Omit<RippleProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNRipple = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])

  return <Ripple {...props} style={style} />
}

RNRipple.defaultProps = {
  style: undefined,
}

export default React.memo(RNRipple)

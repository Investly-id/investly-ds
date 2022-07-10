import React from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNView = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])

  return <View {...props} style={style} />
}

RNView.defaultProps = {
  style: undefined,
}

export default React.memo(RNView)

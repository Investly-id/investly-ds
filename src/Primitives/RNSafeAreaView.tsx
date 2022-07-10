import React, { useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<View, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNSafeAreaView = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <View {...props} style={style} />
}

RNSafeAreaView.defaultProps = {
  style: undefined,
}

export default React.memo(RNSafeAreaView)

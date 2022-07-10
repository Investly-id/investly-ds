import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'

import { getTwStyle } from '../Utils'

interface Props extends Omit<SafeAreaViewProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNSafeAreaView = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])

  return <SafeAreaView {...props} style={style} />
}

RNSafeAreaView.defaultProps = {
  style: undefined,
}

export default React.memo(RNSafeAreaView)

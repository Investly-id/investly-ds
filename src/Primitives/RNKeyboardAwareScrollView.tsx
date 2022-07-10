import React from 'react'
import { ScrollView, StyleProp, ViewStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<ScrollView, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const RNKeyboardAwareScrollView = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])

  return <ScrollView {...props} style={style} />
}

RNKeyboardAwareScrollView.defaultProps = {
  style: undefined,
  contentContainerStyle: undefined,
  scrollEnabled: false,
  showsVerticalScrollIndicator: false,
}

export default RNKeyboardAwareScrollView

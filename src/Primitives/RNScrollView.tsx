import React, { useMemo } from 'react'
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props
  extends Omit<ScrollViewProps, 'style' | 'contentContainerStyle'> {
  style?: StyleProp<ViewStyle> | string
  contentContainerStyle?: StyleProp<ViewStyle> | string
}

const RNScrollView = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])
  const contentContainerStyle = useMemo(
    () => getTwStyle(props.contentContainerStyle),
    [props]
  )

  return (
    <ScrollView
      {...props}
      style={style}
      contentContainerStyle={contentContainerStyle}
    />
  )
}

RNScrollView.defaultProps = {
  style: undefined,
  contentContainerStyle: undefined,
}

export default React.memo(RNScrollView)

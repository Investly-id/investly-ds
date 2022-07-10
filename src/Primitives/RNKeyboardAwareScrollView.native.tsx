import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

import { getTwStyle } from '../Utils'

interface Props
  extends Omit<
    KeyboardAwareScrollViewProps,
    'style' | 'contentContainerStyle'
  > {
  style?: StyleProp<ViewStyle> | string
  contentContainerStyle?: StyleProp<ViewStyle> | string
  children: React.ReactNode
}

const RNKeyboardAwareScrollView = (props: Props) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])
  const contentContainerStyle = React.useMemo(
    () => getTwStyle(props.contentContainerStyle),
    [props]
  )

  return (
    <KeyboardAwareScrollView
      {...props}
      extraScrollHeight={50}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {props.children}
    </KeyboardAwareScrollView>
  )
}

RNKeyboardAwareScrollView.defaultProps = {
  style: undefined,
  contentContainerStyle: undefined,
}

export default RNKeyboardAwareScrollView

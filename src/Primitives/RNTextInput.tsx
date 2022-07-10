import React, { forwardRef } from 'react'
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<TextStyle> | string
}

export type RNTextInputProps = Props

const RNTextInput = forwardRef<TextInput, Props>((props, ref) => {
  const style = React.useMemo(() => getTwStyle(props.style), [props])

  return <TextInput {...props} ref={ref} style={style} />
})

RNTextInput.defaultProps = {
  style: undefined,
}

export default React.memo(RNTextInput)

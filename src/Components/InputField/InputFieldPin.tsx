import React, { forwardRef } from 'react'

import InputField, { InputFieldHandle, InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputFieldPin = forwardRef<InputFieldHandle, Props>(
  (props: Props, ref) => {
    return <InputField {...props} ref={ref} />
  },
)

InputFieldPin.defaultProps = {
  style: undefined,
}

export default React.memo(InputFieldPin)

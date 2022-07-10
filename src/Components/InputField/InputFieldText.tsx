import React, { forwardRef } from 'react'

import InputField, { InputFieldHandle, InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputFieldText = forwardRef<InputFieldHandle, Props>(
  (props: Props, ref) => {
    return <InputField {...props} ref={ref} />
  },
)

InputFieldText.defaultProps = {
  style: undefined,
}

export default React.memo(InputFieldText)

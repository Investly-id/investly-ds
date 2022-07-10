import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import Icon from '../Icon'
import InputField, { InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputFieldPassword = ({ ...props }: Props) => {
  const [secure, setSecure] = useState(true)

  const rightIcon = useCallback(
    ({
      size,
      fill,
      padding,
    }: {
      size?: number
      fill?: string
      padding: number
    }) => {
      return (
        <TouchableOpacity
          onPress={() => setSecure((prev) => !prev)}
          style={{
            padding: padding,
            marginRight: padding * -1,
          }}
        >
          <Icon fill={fill} size={size} name={secure ? 'eye' : 'eye-slash'} />
        </TouchableOpacity>
      )
    },
    [secure]
  )

  return (
    <InputField {...props} rightIcon={rightIcon} secureTextEntry={secure} />
  )
}

InputFieldPassword.defaultProps = {}

export default React.memo(InputFieldPassword)

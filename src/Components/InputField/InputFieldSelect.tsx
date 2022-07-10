import React, { useCallback, useEffect, useRef } from 'react'
import { Pressable } from 'react-native'

// import { globalRef } from '@/Utils/globalRef'
import { ValueLabelOption } from '../../Types/Component'
import { ModalBottomOptionRenderItem } from '../Modal/ModalBottomOption'
import InputField, { InputFieldHandle, InputFieldProps } from './InputField'

interface Props extends InputFieldProps {
  options: Array<any>
  renderOptionItem?: ModalBottomOptionRenderItem
  searchable?: boolean
}

const InputFieldSelect = ({
  options,
  initialValue,
  renderOptionItem,
  searchable,
  ...props
}: Props) => {
  const inputRef = useRef<InputFieldHandle>(null)

  const onOptionSelect = useCallback(
    (data: ValueLabelOption) => {
      inputRef?.current?.setValue(data.value, data.label)
      props?.onChangeText?.(data.value as string)
    },
    [inputRef, props]
  )

  const onInputPress = useCallback(() => {
    // globalRef.modalBottomOption?.show({
    //   title: props.label,
    //   options,
    //   onSelect: onOptionSelect,
    //   renderItem: renderOptionItem,
    //   searchable,
    // })
  }, [options, onOptionSelect, props.label, renderOptionItem, searchable])

  useEffect(() => {
    if (initialValue) {
      const initialSelect = options.find((v) => v.value === initialValue)
      if (initialSelect) {
        inputRef?.current?.setValue(initialSelect.value, initialSelect.label)
      }
    }
  }, [initialValue, options])

  return (
    <Pressable disabled={props.disabled} onPress={onInputPress}>
      <InputField
        {...props}
        ref={inputRef}
        focusable={false}
        pointerEvents='none'
        rightIcon='chevron-right'
        editable={false}
      />
    </Pressable>
  )
}

InputFieldSelect.defaultProps = {
  renderOptionItem: undefined,
  searchable: false,
}

export default React.memo(InputFieldSelect)

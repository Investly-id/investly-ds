import React, { Dispatch, SetStateAction, useCallback } from 'react'
import * as yup from 'yup'

import { RNScrollView, RNTouchableOpacity, RNView } from '../../Primitives'
import { ValueLabelOption } from '../../Types/Component'
import Button from '../Button'
import useInputFieldForm from '../Hooks/useInputFieldForm'
import InputFieldCurrency from '../InputField/InputFieldCurrency'
import InputFieldDate from '../InputField/InputFieldDate'
import InputFieldPassword from '../InputField/InputFieldPassword'
import InputFieldSelect from '../InputField/InputFieldSelect'
import InputFieldText from '../InputField/InputFieldText'
import Typography from '../Typography'

const ExampleForm: React.FC = () => {
  const { inputRef, validate, isValid, ref } = useInputFieldForm({
    rules: {
      fullname: yup.string().required(),
      password: yup.string().required().min(7),
      password_confirmation: yup.string().required().min(7),
      currency: yup.string().required(),
      date: yup.string().required(),
      gender: yup.string().required(),
      group: yup.string().required(),
    },
  })

  const onPressLogin = useCallback(async () => {
    const { status, values } = await validate()
    if (status) {
      console.log({ values })
    }
  }, [validate])

  const renderItem = useCallback(
    ({
      item,
      onPress,
    }: {
      item: ValueLabelOption & { description: string }
      onPress: () => void
    }) => {
      return (
        <RNTouchableOpacity onPress={onPress}>
          <RNView style='flex-row items-center mb-2'>
            <RNView style='w-10 h-10 bg-neutral-300 rounded-full mr-2' />
            <RNView>
              <Typography>{item.label}</Typography>
              <Typography>{item.description}</Typography>
            </RNView>
          </RNView>
        </RNTouchableOpacity>
      )
    },
    []
  )

  const passwordCheck = useCallback(
    (
      passwordConfirmation: string | number,
      setError: Dispatch<SetStateAction<string>>
    ) => {
      const password = ref.current.password.getValue()
      if (password !== passwordConfirmation && !!passwordConfirmation) {
        setError('Konfirmasi password harus sama dengan password')
      }
    },
    [ref]
  )

  return (
    <RNScrollView style='p-5' showsVerticalScrollIndicator={false}>
      <RNView style='bg-white rounded-6 py-6 px-4'>
        <InputFieldText
          label='Full Nama (Text)'
          containerStyle='pb-2'
          {...inputRef.fullname}
        />
        <InputFieldPassword
          label='Password (Password)'
          containerStyle='pb-2'
          {...inputRef.password}
        />
        <InputFieldPassword
          label='Password Confirmation (Password)'
          containerStyle='pb-2'
          onValidate={passwordCheck}
          {...inputRef.password_confirmation}
        />
        <InputFieldCurrency
          label='Currency'
          containerStyle='pb-2'
          {...inputRef.currency}
        />
        <InputFieldDate label='Date' containerStyle='pb-2' {...inputRef.date} />

        <InputFieldSelect
          label='Gender (Default Option Item)'
          containerStyle='pb-2'
          options={[
            {
              label: 'Laki laki',
              value: 'L',
            },
            {
              label: 'Perempuan',
              value: 'P',
            },
          ]}
          {...inputRef.gender}
        />
        <InputFieldSelect
          label='Group (Custom Option Item)'
          containerStyle='pb-2'
          options={[
            {
              label: 'Public',
              value: 'public',
              description: 'asdsad',
            },
            {
              label: 'Private',
              value: 'private',
              description: 'pppp',
            },
            {
              label: 'Exclusive',
              value: 'exclusive',
              description: 'zzzzz',
            },
          ]}
          renderOptionItem={renderItem}
          {...inputRef.group}
        />
        <InputFieldText
          label='Full Nama (Text)'
          containerStyle='pb-2'
          {...inputRef.fullname}
        />
        <Button onPress={onPressLogin} disabled={!isValid}>
          Login
        </Button>
      </RNView>
    </RNScrollView>
  )
}

ExampleForm.defaultProps = {}

export default React.memo(ExampleForm)

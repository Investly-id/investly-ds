import React, {
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native'
import * as yup from 'yup'
import Lazy from 'yup/lib/Lazy'
import Reference from 'yup/lib/Reference'

import { RNText, RNTextInput, RNView } from '../../Primitives'
import { colors } from '../../Styles'
import { InputFieldSize } from '../../Types/Component'
import { IconName } from '../Icon'
import Typography from '../Typography'
import { useInputFieldStyle } from './InputField.logic'

interface IconProps {
  fill?: string
  size?: number
}

interface Props extends Omit<TextInputProps, 'style'> {
  label?: string
  size?: InputFieldSize
  leftIcon?: IconName | ((props: IconProps) => React.ReactNode)
  rightIcon?:
    | IconName
    | ((props: IconProps & { padding: number }) => React.ReactNode)
  style?: StyleProp<TextStyle> | string
  rules?: yup.AnySchema | Reference | Lazy<any, any>
  disabled?: boolean
  containerStyle?: StyleProp<TextStyle> | string
  initialValue?: string | null
  setRef?: (key: string, ref: InputFieldHandle) => void
  refName?: string
  helperText?: string
  valueFormatter?: {
    display: (value: string) => string
    reverse: (value: string) => string
  }
  onValidate?: (
    value: string | number,
    setError: Dispatch<SetStateAction<string>>
  ) => void
}

export type InputFieldProps = Props

export type InputFieldHandle = {
  validate: (setErrorMessage?: boolean) => void
  getValue: () => string
  setValue: (value: string | number, displayValue?: string) => void
  focus: () => void
}

const InputField = forwardRef<InputFieldHandle, Props>(
  (
    {
      rules,
      label,
      initialValue,
      containerStyle,
      setRef,
      refName,
      rightIcon,
      leftIcon,
      disabled,
      helperText,
      valueFormatter,
      multiline,
      size,
      onValidate,
      defaultValue,
      ...restProps
    },
    ref
  ) => {
    const textInputRef = useRef<TextInput>(null)
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(defaultValue || '')
    const [displayValue, setDisplayValue] = useState('')
    const [error, setError] = useState('')

    const {
      textInputWrapperStyle,
      textInputStyle,
      memoContainerStyle,
      textStyle,
      renderIcon,
    } = useInputFieldStyle({
      focus,
      error,
      multiline,
      containerStyle,
      disabled,
      leftIcon,
      rightIcon,
      size,
      secure: restProps.secureTextEntry ?? false,
      value,
    })

    const schema = useMemo(() => {
      if (!rules || !label) {
        return null
      }
      return yup.object().shape({
        [label]: rules,
      })
    }, [rules, label])

    const setIsFocus = useCallback(() => {
      setFocus(true)
    }, [])

    const setUnFocus = useCallback(() => {
      setFocus(false)
    }, [])

    const validateValue = useCallback(
      async (
        val: string | number,
        setErrorMessage = true,
        resolve?: (v?: unknown) => void,
        reject?: (v: string) => void
      ) => {
        if (!schema || !label) {
          return reject?.(`${label} has no schema!`)
        }
        schema
          .validate({ [label]: val })
          .then(() => {
            if (error !== '' && setErrorMessage) {
              setError('')
            }
            resolve?.()
          })
          .catch((err) => {
            if (error !== err.errors[0] && setErrorMessage) {
              setError(err.errors[0])
            }
            reject?.(err.errors[0])
          })
        onValidate?.(val, setError)
      },
      [label, schema, error, onValidate]
    )

    const validateValueAsync = useCallback(
      async (val: string | number, setErrorMessage = true) => {
        return new Promise((resolve, reject) => {
          validateValue(val, setErrorMessage, resolve, reject)
        })
      },
      [validateValue]
    )

    const onSetValue = useCallback(
      (val: string | number, displayVal?: string) => {
        const formattedValue = valueFormatter?.reverse(val?.toString()) ?? ''
        setValue(formattedValue)
        setDisplayValue(
          valueFormatter?.display(displayVal?.toString() ?? val.toString()) ??
            ''
        )
        validateValue(formattedValue)
      },
      [validateValue, valueFormatter]
    )

    const refMethod = useMemo(
      () => () => ({
        validate: (setErrorMessage?: boolean) =>
          validateValueAsync(value, setErrorMessage),
        getValue: () => value,
        setValue: (val: string | number, displayVal?: string) =>
          onSetValue(val, displayVal),
        focus: () => textInputRef?.current?.focus(),
      }),
      [validateValueAsync, onSetValue, value]
    )

    useImperativeHandle(ref, refMethod)

    useEffect(() => {
      if (initialValue) {
        onSetValue(initialValue.toString(), initialValue.toString())
      }
    }, [initialValue, onSetValue])

    useEffect(() => {
      if (!refName) {
        return
      }
      setRef?.(refName, refMethod())
    }, [setRef, refName, refMethod])

    return (
      <RNView style={memoContainerStyle}>
        {!!label && (
          <Typography type='heading' size='xs' containerStyle='pb-2'>
            {label}
          </Typography>
        )}

        <RNView style={textInputWrapperStyle}>
          {renderIcon('left')}
          <RNTextInput
            autoCapitalize='none'
            onFocus={setIsFocus}
            onBlur={setUnFocus}
            onChangeText={onSetValue}
            editable={!disabled}
            placeholder={label}
            ref={textInputRef}
            {...restProps}
            placeholderTextColor={colors.neutral[500]}
            style={textInputStyle}
            multiline={multiline}
          >
            <RNText style={textStyle}>
              {displayValue?.toString() || value?.toString()}
            </RNText>
          </RNTextInput>
          {renderIcon('right')}
        </RNView>
        <RNView style='pt-0 pt-1'>
          {!!helperText && (
            <Typography style={'text-neutral-400'} size='sm'>
              {helperText}
            </Typography>
          )}
          {!!label && (
            <Typography
              style={error ? 'text-red-500' : 'text-transparent'}
              size='sm'
            >
              {error || ' '}
            </Typography>
          )}
        </RNView>
      </RNView>
    )
  }
)

InputField.defaultProps = {
  size: 'md',
  leftIcon: undefined,
  rightIcon: undefined,
  style: undefined,
  rules: undefined,
  label: '',
  disabled: false,
  containerStyle: undefined,
  initialValue: '',
  setRef: undefined,
  refName: undefined,
  helperText: '',
  valueFormatter: {
    display: (value) => value,
    reverse: (value) => value,
  },
  onValidate: undefined,
}

export default React.memo(InputField)

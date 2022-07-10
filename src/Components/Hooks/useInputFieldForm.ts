import { useCallback, useRef, useState } from 'react'
import { Keyboard } from 'react-native'
import { InputFieldHandle } from '../InputField/InputField'
import inputFieldValidator from '../Utils/inputFieldValidator'
import * as yup from 'yup'
import Reference from 'yup/lib/Reference'
import Lazy from 'yup/lib/Lazy'

type YupRule = yup.AnySchema | Reference | Lazy<any, any>

type Props<F extends keyof any> = {
  rules: { [key in F]: YupRule }
  isValidListener?: boolean
  inputOrder?: Array<F>
}

function useInputFieldForm<F extends keyof any>({
  rules,
  isValidListener = false,
  inputOrder,
}: Props<F>) {
  const ref = useRef<Record<string, InputFieldHandle>>({})
  const [isValid, setIsValid] = useState(false)

  const checkIsValid = useCallback(async () => {
    const result = await inputFieldValidator<F>({
      ref: ref.current,
      showErrorMessageEachField: false,
      showErrorMessge: false,
    })
    if (isValidListener) {
      setIsValid(result.status)
    }
  }, [isValidListener])

  const setRef = useCallback(
    (key: string, refs: InputFieldHandle) => {
      ref.current[key] = refs
      checkIsValid()
    },
    [checkIsValid],
  )

  const validate = useCallback(async () => {
    Keyboard.dismiss()
    const result = await inputFieldValidator<F>({ ref: ref.current })
    return result
  }, [ref])

  const inputRef = useRef(
    Object.keys(rules).reduce((prev, current) => {
      return {
        ...prev,
        [current]: {
          // @ts-ignore
          rules: rules[current],
          refName: current,
          setRef,
          onSubmitEditing: () => {
            if (inputOrder) {
              const index = inputOrder.indexOf(current as F)
              ref?.current[inputOrder[index + 1] as string]?.focus()
            }
          },
        },
      }
    }, {}) as {
      [key in F]: {
        rules: YupRule
        refName: string
        setRef: (key: string, ref: InputFieldHandle) => void
      }
    },
  ).current

  return { ref, setRef, validate, rules, inputRef, isValid }
}

export default useInputFieldForm

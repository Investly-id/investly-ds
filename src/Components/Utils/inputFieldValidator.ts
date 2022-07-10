import { InputFieldHandle } from '../InputField/InputField'
import showToast from './showToast'

type Props = {
  ref: Record<string, InputFieldHandle>
  showErrorMessge?: boolean
  showErrorMessageEachField?: boolean
}

export async function inputFieldValidator<T extends string | number | symbol>({
  ref,
  showErrorMessge = false,
  showErrorMessageEachField = true,
}: Props) {
  let values: Record<string, string> = {}
  const func = Object.keys(ref).map(key => {
    values[key] = ref[key].getValue()
    return ref[key]
  })
  let errors = ''
  for (let i = 0; i < func.length; i++) {
    try {
      await func[i].validate(showErrorMessageEachField)
    } catch (error) {
      if (errors) {
        errors += '\n'
      }
      errors += error
    }
  }
  if (showErrorMessge && errors) {
    showToast({ type: 'negative', text: errors })
  }
  return { status: !errors, errors, values } as {
    status: boolean
    values: Record<T, string>
    errors: string
  }
}

export default inputFieldValidator

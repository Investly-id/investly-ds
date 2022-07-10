import Toast from 'react-native-toast-message'
import { IconName } from '../Icon'

const showToast = (args: {
  type?: 'default' | 'positive' | 'negative'
  text: string
  leftIcon?: IconName
  closeable?: boolean
}) => {
  Toast.show({
    type: args.type ?? 'default',
    props: {
      leftIcon: args.leftIcon ?? undefined,
      closeable: args.closeable ?? false,
      text: args.text,
    },
  })
}

export default showToast

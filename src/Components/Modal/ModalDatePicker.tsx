import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'

interface Props {}

export type ModalDatePickerConfig = {
  onSelect: (data: Date) => void
}

export type ModalDatePickerHandle = {
  show: (param: ModalDatePickerConfig) => void
  hide: () => void
}

const baseConfig: ModalDatePickerConfig = {
  onSelect: () => {},
}

const ModalDatePicker = forwardRef<ModalDatePickerHandle, Props>((_, ref) => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState<Date>(new Date())
  const [config, setConfig] = useState<ModalDatePickerConfig>(baseConfig)

  const onConfirm = useCallback(
    (selectedDate: Date) => {
      setVisible(false)
      config.onSelect?.(selectedDate)
      setDate(selectedDate)
    },
    [config]
  )

  const hide = useCallback(() => {
    setVisible(false)
  }, [])

  const show = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => ({
    show: (configParam: ModalDatePickerConfig) => {
      if (configParam) {
        setConfig({ ...baseConfig, ...configParam })
      }
      show()
    },
    hide,
  }))

  return null;
  
})

export default React.memo(ModalDatePicker)

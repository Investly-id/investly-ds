import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import { RNView } from '../../Primitives'
import Button from '../Button'
import Typography from '../Typography'
import { ModalHandle } from './Modal.type'
import ModalBase from './ModalBase'

interface Props {}

export type ModalBottomInfoRefButtonAction = {
  hide: () => void
}
export type ModalBottomInfoRefButton = {
  label: string
  onPress: (prop: ModalBottomInfoRefButtonAction) => void
}

export type ModalBottomInfoRefConfig = {
  title?: string
  content: string
  buttonCenter?: ModalBottomInfoRefButton
  buttonRight?: ModalBottomInfoRefButton
  buttonLeft?: ModalBottomInfoRefButton
  onHide?: () => void
}

export type ModalBottomInfoRefHandle = {
  show: (param: ModalBottomInfoRefConfig) => void
  hide: () => void
}

const baseConfig: ModalBottomInfoRefConfig = {
  title: 'Oops...',
  content: 'Content',
  buttonCenter: undefined,
  buttonRight: undefined,
  buttonLeft: undefined,
  onHide: undefined,
}

const ModalBottomInfoRef = forwardRef<ModalBottomInfoRefHandle, Props>(
  (_, ref) => {
    const [config, setConfig] = useState<ModalBottomInfoRefConfig>(baseConfig)
    const modalBottomRef = useRef<ModalHandle>(null)

    const hide = useCallback(() => {
      modalBottomRef?.current?.hide()
      config?.onHide?.()
    }, [config])

    const onPressButton = useCallback(
      (action: any) => {
        action({ hide })
      },
      [hide]
    )

    const button = useMemo(() => {
      if (config.buttonLeft && config.buttonRight) {
        return (
          <RNView style='mt-5 flex-row'>
            <Button
              mode='outline'
              containerStyle='fill'
              onPress={() => onPressButton(config.buttonLeft?.onPress)}
            >
              {config.buttonLeft.label}
            </Button>
            <RNView style='w-2' />
            <Button
              containerStyle='fill'
              onPress={() => onPressButton(config.buttonRight?.onPress)}
            >
              {config.buttonRight.label}
            </Button>
          </RNView>
        )
      }

      return (
        <Button
          containerStyle='mt-5'
          onPress={() => onPressButton(config.buttonCenter?.onPress ?? hide)}
        >
          {config.buttonCenter?.label ?? 'Ok'}
        </Button>
      )
    }, [
      config.buttonLeft,
      config.buttonRight,
      config.buttonCenter,
      onPressButton,
      hide,
    ])

    useImperativeHandle(ref, () => ({
      show: (configParam: ModalBottomInfoRefConfig) => {
        if (configParam) {
          setConfig({ ...baseConfig, ...configParam })
        }
        modalBottomRef?.current?.show()
      },
      hide: hide,
    }))

    return (
      <ModalBase ref={modalBottomRef} title={config?.title}>
        <Typography>{config.content}</Typography>
        {button}
      </ModalBase>
    )
  }
)

export default React.memo(ModalBottomInfoRef)

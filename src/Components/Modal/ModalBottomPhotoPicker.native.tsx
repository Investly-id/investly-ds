import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'

import { RNTouchableOpacity, RNView } from '../../Primitives'
import Icon from '../Icon'
import Typography from '../Typography'
import { ModalHandle } from './Modal.type'
import ModalBase from './ModalBase'

interface Props {}

export type ModalBottomPhotoPickerConfig = {
  onSelectImage?: (data: ImagePickerResponse) => void
}

export type ModalBottomPhotoPickerHandle = {
  show: (param: ModalBottomPhotoPickerConfig) => void
  hide: () => void
}

const baseConfig: ModalBottomPhotoPickerConfig = {
  onSelectImage: undefined,
}

const ModalBottomInfo = forwardRef<ModalBottomPhotoPickerHandle, Props>(
  (_, ref) => {
    const config = useRef<ModalBottomPhotoPickerConfig>(baseConfig)
    const modalBottomRef = useRef<ModalHandle>(null)

    const cameraConfig = useRef({
      mediaType: 'photo',
      saveToPhotos: false,
      maxHeight: 500,
      maxWidth: 500,
      includeBase64: true,
    }).current
    const hide = useCallback(() => {
      modalBottomRef?.current?.hide()
    }, [])

    const onReceivePhoto = useCallback(
      (response: ImagePickerResponse) => {
        hide()
        setTimeout(() => {
          config.current?.onSelectImage?.(response)
        }, 300)
      },
      [hide]
    )

    const openCamera = useCallback(async () => {
      await launchCamera(
        { ...cameraConfig, mediaType: 'photo' },
        onReceivePhoto
      )
    }, [onReceivePhoto, cameraConfig])

    const openGallery = useCallback(async () => {
      await launchImageLibrary(
        { ...cameraConfig, mediaType: 'photo', selectionLimit: 1 },
        onReceivePhoto
      )
    }, [onReceivePhoto, cameraConfig])

    useImperativeHandle(ref, () => ({
      show: (configParam: ModalBottomPhotoPickerConfig) => {
        if (configParam) {
          config.current = { ...baseConfig, ...configParam }
        }
        modalBottomRef?.current?.show()
      },
      hide: () => {
        modalBottomRef?.current?.hide()
      },
    }))

    return (
      <ModalBase ref={modalBottomRef} title={'Pilih Metode'}>
        <RNTouchableOpacity
          activeOpacity={0.7}
          onPress={openCamera}
          style='flex-row pb-4'
        >
          <Icon name='camera' fill='neutral-400' />
          <Typography containerStyle='pl-3'>Gunakan kamera</Typography>
        </RNTouchableOpacity>
        <RNView style='h-[1px] bg-neutral-300' />
        <RNTouchableOpacity
          activeOpacity={0.7}
          onPress={openGallery}
          style='flex-row pt-4'
        >
          <Icon name='image' fill='neutral-400' />
          <Typography containerStyle='pl-3'>Unggah dari galeri</Typography>
        </RNTouchableOpacity>
      </ModalBase>
    )
  }
)

export default React.memo(ModalBottomInfo)

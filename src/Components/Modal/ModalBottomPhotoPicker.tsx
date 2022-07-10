import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'

import { RNScrollView} from '../../Primitives'

interface Props {}

export type ModalBottomPhotoPickerConfig = {
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

    return <RNScrollView />
  }
)

export default React.memo(ModalBottomInfo)

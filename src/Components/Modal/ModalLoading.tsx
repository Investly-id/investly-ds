import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'

import { colors } from '../../Styles'

interface Props {}

export type ModalLoadingHandle = {
  show: () => void
  hide: () => void
}

const ModalLoading = forwardRef<ModalLoadingHandle, Props>((_, ref) => {
  const [visibleCount, setVisibleCount] = useState<number>(0)

  const isVisible = useMemo(() => !!visibleCount, [visibleCount])

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisibleCount((prev) => prev + 1)
    },
    hide: () => {
      setVisibleCount((prev) => (prev === 0 ? 0 : prev - 1))
    },
  }))

  return (
    <Modal
      animationIn='fadeIn'
      animationOut='fadeOut'
      isVisible={isVisible}
      style={styles.backdrop}
    >
      <ActivityIndicator size='large' color={colors.purple[600]} />
    </Modal>
  )
})

export default React.memo(ModalLoading)

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

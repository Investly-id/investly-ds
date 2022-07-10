import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { NativeModules } from 'react-native'
import Modal from 'react-native-modal'

import {
  RNKeyboardAwareScrollView,
  RNTouchableOpacity,
  RNView,
} from '../../Primitives'
import Icon from '../Icon'
import Typography from '../Typography'
import { ModalHandle } from './Modal.type'
const { StatusBarManager } = NativeModules

interface Props {
  title?: string
  scrollEnabled?: boolean
  children: React.ReactNode
  keyboardAvoidingEnabled?: boolean
  containerStyle?: string
}

const ModalBaseView = forwardRef<ModalHandle, Props>(
  ({ title, children, scrollEnabled, containerStyle }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const STATUSBAR_HEIGHT =
      Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

    const hide = useCallback(() => {
      setVisible(false)
    }, [])

    useImperativeHandle(ref, () => ({
      show: () => {
        setVisible(true)
      },
      hide: () => {
        setVisible(false)
      },
    }))

    return (
      <Modal
        avoidKeyboard
        isVisible={visible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        onBackdropPress={hide}
        onBackButtonPress={hide}
        style={styles.modal}
      >
        {/* <RNKeyboardAvoidingView enabled={keyboardAvoidingEnabled}> */}
        <RNView
          style={`bg-neutral-100 pt-3 rounded-t-4 max-h-[${
            Dimensions.get('screen').height - (STATUSBAR_HEIGHT ?? 0)
          }px]`}
        >
          <RNView style={''}>
            <RNView style='px-6'>
              <RNTouchableOpacity style='mb-6' onPress={hide}>
                <Icon name='times' size={20} fill='neutral-400' />
              </RNTouchableOpacity>
              {!!title && (
                <Typography style='pb-4' size='lg' type='heading'>
                  {title}
                </Typography>
              )}
            </RNView>
            <RNView style={`px-6 pb-8  ${containerStyle}`}>
              {scrollEnabled ? (
                <RNKeyboardAwareScrollView
                  scrollEnabled={scrollEnabled}
                  showsVerticalScrollIndicator={false}
                >
                  {children}
                </RNKeyboardAwareScrollView>
              ) : (
                children
              )}
            </RNView>
          </RNView>
        </RNView>
        {/* </RNKeyboardAvoidingView> */}
      </Modal>
    )
  }
)

ModalBaseView.defaultProps = {
  title: '',
  scrollEnabled: false,
  keyboardAvoidingEnabled: false,
  containerStyle: '',
}

export default React.memo(ModalBaseView)

const styles = StyleSheet.create({
  modal: { margin: 0, justifyContent: 'flex-end' },
})

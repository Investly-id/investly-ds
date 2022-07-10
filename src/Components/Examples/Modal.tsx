import React, { useRef } from 'react'

// import { globalRef } from '@/Utils/globalRef'
import { RNScrollView, RNView } from '../../Primitives'
import Button from '../Button'
import InputField from '../InputField/InputField'
import { ModalBase, ModalHandle } from '../Modal'
import Typography from '../Typography'

const ExampleForm: React.FC = () => {
  const refModalBaseView = useRef<ModalHandle>(null)
  const refModalBaseScrollView = useRef<ModalHandle>(null)
  const refModalInput = useRef<ModalHandle>(null)
  const refModalInput2 = useRef<ModalHandle>(null)
  return (
    <RNScrollView style='p-5'>
      <RNView style='bg-white rounded-6 py-6 px-4'>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            refModalBaseView.current?.show()
          }}
        >
          refModalBaseView
        </Button>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            refModalBaseScrollView.current?.show()
          }}
        >
          refModalBaseScrollView
        </Button>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            refModalInput.current?.show()
          }}
        >
          refModalInput
        </Button>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            refModalInput2.current?.show()
          }}
        >
          refModalInput2
        </Button>

        <Button
          containerStyle='mb-2'
          onPress={() => {
            // globalRef.modalBottomInfo?.show({
            //   content: 'asdsad',
            //   title: 'This is title',
            //   buttonLeft: {
            //     label: 'ButtonLeft Label',
            //     onPress: ({ hide }) => {
            //       hide()
            //     },
            //   },
            //   buttonRight: {
            //     label: 'Right Label',
            //     onPress: ({ hide }) => {
            //       hide()
            //     },
            //   },
            // })
          }}
        >
          Modal Bottom Info
        </Button>

        <Button
          containerStyle='mb-2'
          onPress={() => {
            // globalRef.loading?.show()
            // setTimeout(() => {
            //   globalRef.loading?.hide()
            // }, 2000)
          }}
        >
          Loading
        </Button>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            // globalRef.modalBottomOption?.show({
            //   title: 'Title',
            //   onSelect: (data) => {
            //     console.log({ data })
            //   },
            //   options: [
            //     {
            //       label: 'Label',
            //       value: 'valuelabel',
            //     },
            //     {
            //       label: 'Label A',
            //       value: 'valuelabela',
            //     },
            //   ],
            // })
          }}
        >
          Modal Option
        </Button>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            // globalRef.modalDatePicker?.show({
            //   onSelect: (date) => {
            //     console.log({ date })
            //   },
            // })
          }}
        >
          Modal Date Picker
        </Button>
        <Button
          containerStyle='mb-2'
          onPress={() => {
            // globalRef.modalBottomPhotoPicker?.show({
            //   onSelectImage: (data) => {
            //     console.log({ data })
            //   },
            // })
          }}
        >
          Modal Photo Picker
        </Button>
        {/*  */}
        <ModalBase title='View Modal' ref={refModalBaseView}>
          <Typography>Content</Typography>
          <RNView style='h-[300px] bg-red-500' />
          <RNView style='h-[100px] bg-blue-500' />
          <RNView style='h-[100px] bg-green-500' />
          <RNView style='h-[100px] bg-yellow-500' />
          <Typography>Content</Typography>
        </ModalBase>
        <ModalBase
          title='Scroll View Modal'
          scrollEnabled
          ref={refModalBaseScrollView}
        >
          <Typography>Content</Typography>
          <RNView style='h-[300px] bg-red-500' />
          <RNView style='h-[100px] bg-blue-500' />
          <RNView style='h-[100px] bg-green-500' />
          <RNView style='h-[100px] bg-yellow-500' />
          <RNView style='h-[100px] bg-blue-500' />
          <RNView style='h-[100px] bg-green-500' />
          <Typography>Content</Typography>
        </ModalBase>
        <ModalBase
          scrollEnabled
          title='Input Inside Scroll Modal'
          ref={refModalInput}
        >
          <InputField label='Input' />
          <RNView style='h-[100px] bg-green-500' />
          <RNView style='h-[100px] bg-green-500' />
          <RNView style='h-[100px] bg-green-500' />
          <InputField label='Input' />
          <InputField label='Input' />
          <InputField label='Input' />
        </ModalBase>
        <ModalBase
          keyboardAvoidingEnabled
          title='Input Inside Scroll Modal'
          ref={refModalInput2}
        >
          <InputField label='Input' />
          <InputField label='Input' />
        </ModalBase>
      </RNView>
    </RNScrollView>
  )
}

ExampleForm.defaultProps = {}

export default React.memo(ExampleForm)

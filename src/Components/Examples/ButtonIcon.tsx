import React from 'react'

import { RNView } from '../../Primitives'
import ButtonIcon from '../ButtonIcon'
import Typography from '../Typography'

const ExampleButtonIcon: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Button Icon
        </Typography>
        <RNView style='flex-row'>
          <ButtonIcon size='sm' icon='arrow-down' variant='blue' />
          <ButtonIcon
            size='sm'
            icon='arrow-down'
            mode='outline'
            variant='red'
          />
          <ButtonIcon size='sm' icon='arrow-down' mode='tertiary' />
        </RNView>
        <RNView style='flex-row'>
          <ButtonIcon icon='arrow-down' variant='blue' />
          <ButtonIcon icon='arrow-down' mode='outline' variant='red' />
          <ButtonIcon icon='arrow-down' mode='tertiary' />
        </RNView>
        <RNView style='flex-row'>
          <ButtonIcon size='lg' icon='arrow-down' />
          <ButtonIcon size='lg' icon='arrow-down' mode='outline' />
          <ButtonIcon size='lg' icon='arrow-down' mode='tertiary' />
        </RNView>
        <RNView style='flex-row'>
          <ButtonIcon size='lg' icon='arrow-down' disabled />
          <ButtonIcon size='lg' icon='arrow-down' disabled mode='outline' />
          <ButtonIcon size='lg' icon='arrow-down' disabled mode='tertiary' />
        </RNView>
        <RNView style='flex-row'>
          <ButtonIcon size='lg' icon='arrow-down' loading />
          <ButtonIcon size='lg' icon='arrow-down' loading mode='outline' />
          <ButtonIcon size='lg' icon='arrow-down' loading mode='tertiary' />
        </RNView>
      </RNView>
    </RNView>
  )
}

ExampleButtonIcon.defaultProps = {}

export default React.memo(ExampleButtonIcon)

import React from 'react'

import { RNView } from '../../Primitives'
import ButtonLink from '../ButtonLink'
import Typography from '../Typography'

const ExampleButtonLink: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Button Link
        </Typography>
        <ButtonLink style='mb-1' size='sm'>
          Button Small
        </ButtonLink>
        <ButtonLink style='mb-1'>Button Medium</ButtonLink>
        <ButtonLink style='mb-1' size='lg'>
          Button Large
        </ButtonLink>
        <ButtonLink style='mb-1 fill' loading size='sm'>
          Button Small Loading
        </ButtonLink>
        <ButtonLink style='mb-1' variant='green'>
          Button Variant
        </ButtonLink>
        <ButtonLink style='mb-1' variant='green' disabled>
          Button Disabled
        </ButtonLink>
        <ButtonLink
          style='mb-1'
          leftIcon='ambulance'
          rightIcon='arrow-right'
          variant='blue'
        >
          Button w/ Icon
        </ButtonLink>
      </RNView>
    </RNView>
  )
}

ExampleButtonLink.defaultProps = {}

export default React.memo(ExampleButtonLink)

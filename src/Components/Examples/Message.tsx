import React from 'react'

import { RNView } from '../../Primitives'
import Message from '../Message'
import Typography from '../Typography'

const ExampleLabel: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Control Checkbox
        </Typography>

        <Message leftIcon='info-circle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet, consectetur adipiscing elit.
        </Message>
        <Message buttonText={'Button'} leftIcon='info-circle' rightIcon='times'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet, consectetur adipiscing elit.
        </Message>
        <Message
          variant='green'
          buttonText={'Button'}
          leftIcon='check'
          rightIcon='times'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet, consectetur adipiscing elit.
        </Message>
      </RNView>
    </RNView>
  )
}

ExampleLabel.defaultProps = {}

export default React.memo(ExampleLabel)

import React from 'react'

import { RNView } from '../../Primitives'
import Label from '../Label'
import Typography from '../Typography'

const ExampleLabel: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Control Checkbox
        </Typography>

        <Label filled={false} size='sm'>
          NonFilled SM
        </Label>
        <Label>NonFilled</Label>
        <Label leftIcon='check'>Filled</Label>
        <Label variant='green' rightIcon='calendar'>
          Filled
        </Label>
      </RNView>
    </RNView>
  )
}

ExampleLabel.defaultProps = {}

export default React.memo(ExampleLabel)

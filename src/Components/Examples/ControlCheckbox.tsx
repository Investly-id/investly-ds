import React from 'react'

import { RNView } from '../../Primitives'
import ControlCheckbox from '../ControlCheckbox'
import Typography from '../Typography'

const ExampleControlCheckbox: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Control Checkbox
        </Typography>
        <ControlCheckbox />
        <ControlCheckbox checked />
      </RNView>
    </RNView>
  )
}

ExampleControlCheckbox.defaultProps = {}

export default React.memo(ExampleControlCheckbox)

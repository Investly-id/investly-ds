import React from 'react'

import { RNView } from '../../Primitives'
import ControlSwitch from '../ControlSwitch'
import Typography from '../Typography'

const ExampleControlSwitch: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Control Checkbox
        </Typography>

        <ControlSwitch />
        <ControlSwitch checked />
        <ControlSwitch checked variant='green' />
      </RNView>
    </RNView>
  )
}

ExampleControlSwitch.defaultProps = {}

export default React.memo(ExampleControlSwitch)

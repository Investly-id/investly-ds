import React from 'react'

import { RNView } from '../../Primitives'
import ControlRadio from '../ControlRadio'
import Typography from '../Typography'

const ExampleControlRadio: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Control Checkbox
        </Typography>
        <ControlRadio />
        <ControlRadio checked />
      </RNView>
    </RNView>
  )
}

ExampleControlRadio.defaultProps = {}

export default React.memo(ExampleControlRadio)

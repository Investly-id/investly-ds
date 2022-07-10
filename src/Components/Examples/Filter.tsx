import React from 'react'

import { RNView } from '../../Primitives'
import Filter from '../Filter'
import Typography from '../Typography'

const ExampleFilter: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Control Checkbox
        </Typography>

        <Filter leftIcon='arrow-down'>Filter 1</Filter>
        <Filter active={false}>Filter 1</Filter>
        <Filter disabled>Disable Active</Filter>
        <Filter leftIcon='check' active={false} disabled>
          Disable NonActive
        </Filter>
        <Filter variant='green'>Filter 1</Filter>
      </RNView>
    </RNView>
  )
}

ExampleFilter.defaultProps = {}

export default React.memo(ExampleFilter)

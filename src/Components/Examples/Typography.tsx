import React from 'react'
import { Alert } from 'react-native'

import { RNView } from '../../Primitives'
import Typography from '../Typography'

const ExampleTypography: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Heading
        </Typography>
        <RNView style=''>
          <Typography type='heading' size='xxl'>
            Heading/XXLarge
          </Typography>
          <Typography type='heading'>Heading/Medium</Typography>
          <Typography type='heading' size='xs'>
            Heading/XSmall
          </Typography>
          <Typography
            type='heading'
            size='xs'
            containerStyle='p-2'
            style='text-purple-500'
            onPress={() => {
              Alert.alert('Pressed')
            }}
          >
            Custom Style + Press
          </Typography>
        </RNView>
      </RNView>

      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Paragraph
        </Typography>
        <RNView style=''>
          <Typography size='xxl'>Paragraph/XXLarge</Typography>
          <Typography>Paragraph/Medium</Typography>
          <Typography size='xs'>Paragraph/XSmall</Typography>
          <Typography
            size='xs'
            containerStyle='p-2'
            style='text-purple-500'
            onPress={() => {
              Alert.alert('Pressed')
            }}
          >
            Custom Style + Press
          </Typography>
        </RNView>
      </RNView>

      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Special
        </Typography>
        <RNView style=''>
          <Typography type='special' size='xxl'>
            special/XXLarge
          </Typography>
          <Typography type='special'>special/Medium</Typography>
          <Typography type='special' size='xs'>
            special/XSmall
          </Typography>
          <Typography
            type='special'
            size='xs'
            containerStyle='p-2'
            style='text-purple-500'
            onPress={() => {
              Alert.alert('Pressed')
            }}
          >
            Custom Style + Press
          </Typography>
        </RNView>
      </RNView>
    </RNView>
  )
}

ExampleTypography.defaultProps = {}

export default React.memo(ExampleTypography)

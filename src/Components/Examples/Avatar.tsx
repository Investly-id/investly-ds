import React from 'react'

import { RNView } from '../../Primitives'
import Avatar from '../Avatar'
import Typography from '../Typography'

const ExampleAvatar: React.FC = () => {
  return (
    <RNView style='p-5'>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Empty
        </Typography>
        <RNView style='flex-row items-center'>
          <Avatar size='xxl' />
          <Avatar size='xl' />
          <Avatar size='lg' />
          <Avatar />
          <Avatar size='sm' />
          <Avatar size='xs' />
        </RNView>
      </RNView>
      <RNView style='pb-5'>
        <Typography containerStyle='pb-2' type='heading'>
          Photo
        </Typography>
        <RNView style='flex-row items-center'>
          <Avatar
            size='xxl'
            url='https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90'
          />
          <Avatar
            size='xl'
            url='https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90'
          />
          <Avatar
            size='lg'
            url='https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90'
          />
          <Avatar url='https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90' />
          <Avatar
            size='sm'
            url='https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90'
          />
          <Avatar
            size='xs'
            url='https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90'
          />
        </RNView>
      </RNView>
    </RNView>
  )
}

ExampleAvatar.defaultProps = {}

export default React.memo(ExampleAvatar)

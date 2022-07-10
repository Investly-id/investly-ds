import React from 'react'

import { RNView } from '../Primitives'

interface Props {
  progress: number
  height?: 4 | 12 | 24
  hideOnFull?: boolean
}

const ProgressBar: React.FC<Props> = ({ progress, height, hideOnFull }) => {
  const progressStyle = React.useMemo(() => {
    return ` w-[${progress}%] h-[${height}px] bg-purple-600`
  }, [progress, height])

  if (hideOnFull && progress >= 100) {
    return null
  }
  return (
    <RNView style={`h-[${height}px] bg-neutral-300 `}>
      <RNView style={progressStyle} />
    </RNView>
  )
}

ProgressBar.defaultProps = {
  height: 4,
  hideOnFull: false,
}

export default React.memo(ProgressBar)

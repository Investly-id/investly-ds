import React from 'react'

import { RNView } from '../Primitives'
import { ControlSize } from '../Types/Component'
import { ColorVariant } from '../Types/Component'
import { getTwStyle } from '../Utils'
import Ripple from './Libraries/ButtonRipple'

interface Props {
  variant?: ColorVariant
  size?: ControlSize
  checked?: boolean
  onPress?: () => void
}

const ControlSwitch: React.FC<Props> = ({
  size,
  checked,
  onPress,
  variant,
}) => {
  const viewStyle = React.useMemo(() => {
    let sizeMap: Record<ControlSize, string> = {
      sm: 'w-8 h-5',
      md: 'w-10 h-6',
    }

    return [
      getTwStyle(sizeMap[size ?? 'md']),
      getTwStyle('rounded-full bg-neutral-300 justify-center'),
      getTwStyle(
        checked
          ? `bg-${variant}-600 border-${variant}-600 items-end`
          : 'items-start'
      ),
    ]
  }, [checked, size, variant])

  const dotStyle = React.useMemo(() => {
    let sizeMap: Record<ControlSize, string> = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
    }

    return [
      getTwStyle(sizeMap[size ?? 'md']),
      getTwStyle('bg-white rounded-full m-[2px]'),
    ]
  }, [size])

  return (
    <Ripple
      rippleContainerBorderRadius={99}
      onPress={onPress}
      style={viewStyle}
    >
      <RNView style={dotStyle} />
    </Ripple>
  )
}

ControlSwitch.defaultProps = {
  variant: 'purple',
  size: 'md',
  checked: false,
  onPress: undefined,
}

export default React.memo(ControlSwitch)

import React from 'react'

import { ControlSize } from '../Types/Component'
import { ColorVariant } from '../Types/Component'
import { getTwStyle } from '../Utils'
import Icon from './Icon'
import Ripple from './Libraries/ButtonRipple'

interface Props {
  variant?: ColorVariant
  size?: ControlSize
  checked?: boolean
  onPress?: () => void
}

const ControlCheckbox: React.FC<Props> = ({
  size,
  checked,
  onPress,
  variant,
}) => {
  const viewStyle = React.useMemo(() => {
    let sizeMap: Record<ControlSize, string> = {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
    }

    return [
      getTwStyle(sizeMap[size ?? 'md']),
      getTwStyle(
        'rounded-[6px] border border-neutral-300 items-center justify-center'
      ),
      getTwStyle(checked ? `bg-${variant}-600 border-${variant}-600` : ''),
    ]
  }, [checked, size, variant])

  return (
    <Ripple rippleContainerBorderRadius={6} onPress={onPress} style={viewStyle}>
      <Icon name='check' size={12} fill={'white'} />
    </Ripple>
  )
}

ControlCheckbox.defaultProps = {
  variant: 'purple',
  size: 'md',
  checked: false,
  onPress: undefined,
}

export default React.memo(ControlCheckbox)

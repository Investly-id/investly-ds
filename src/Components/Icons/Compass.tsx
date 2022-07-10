import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Compass = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M11.116 11.116a1.25 1.25 0 1 0 1.767 1.768 1.25 1.25 0 0 0-1.767-1.768ZM12 2.313A9.687 9.687 0 0 0 2.312 12 9.687 9.687 0 0 0 12 21.688 9.687 9.687 0 0 0 21.688 12 9.687 9.687 0 0 0 12 2.312Zm4.927 5.783-2.577 5.638a1.248 1.248 0 0 1-.616.616l-5.638 2.577c-.65.298-1.32-.373-1.023-1.023l2.577-5.639c.125-.272.343-.491.616-.616l5.638-2.577c.65-.297 1.32.373 1.023 1.024Z"
        fill={fill}
      />
    </Svg>
  )
}

Compass.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Compass)

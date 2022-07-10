import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Stop = (props: SvgProps) => {
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
        d="M20.25 1.5H3.75C2.50781 1.5 1.5 2.50781 1.5 3.75V20.25C1.5 21.4922 2.50781 22.5 3.75 22.5H20.25C21.4922 22.5 22.5 21.4922 22.5 20.25V3.75C22.5 2.50781 21.4922 1.5 20.25 1.5Z"
        fill={fill}
      />
    </Svg>
  )
}

Stop.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Stop)

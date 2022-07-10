import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Heart = (props: SvgProps) => {
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
        d="M21.6703 2.93437C19.1015 0.745312 15.2812 1.13906 12.9234 3.57187L12 4.52344L11.0765 3.57187C8.72341 1.13906 4.89841 0.745312 2.32966 2.93437C-0.61409 5.44687 -0.768778 9.95625 1.8656 12.6797L10.9359 22.0453C11.5218 22.65 12.4734 22.65 13.0593 22.0453L22.1297 12.6797C24.7687 9.95625 24.614 5.44687 21.6703 2.93437Z"
        fill={fill}
      />
    </Svg>
  )
}

Heart.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Heart)

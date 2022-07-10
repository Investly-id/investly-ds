import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronLeft = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M6.11811 11.2045L15.2283 2.09484C15.6675 1.65562 16.38 1.65562 16.8192 2.09484L17.8819 3.1575C18.3206 3.59625 18.3211 4.30687 17.8837 4.74656L10.6636 12L17.8833 19.2539C18.3211 19.6936 18.3201 20.4042 17.8814 20.843L16.8187 21.9056C16.3795 22.3448 15.667 22.3448 15.2278 21.9056L6.11811 12.7955C5.67889 12.3562 5.67889 11.6437 6.11811 11.2045Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronLeft.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronLeft)

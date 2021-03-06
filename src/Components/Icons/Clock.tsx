import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Clock = (props: SvgProps) => {
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
        d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM14.6766 16.7859L10.5422 13.7812C10.3969 13.6734 10.3125 13.5047 10.3125 13.3266V5.4375C10.3125 5.12813 10.5656 4.875 10.875 4.875H13.125C13.4344 4.875 13.6875 5.12813 13.6875 5.4375V11.8922L16.6641 14.0578C16.9172 14.2406 16.9688 14.5922 16.7859 14.8453L15.4641 16.6641C15.2812 16.9125 14.9297 16.9688 14.6766 16.7859Z"
        fill={fill}
      />
    </Svg>
  )
}

Clock.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Clock)

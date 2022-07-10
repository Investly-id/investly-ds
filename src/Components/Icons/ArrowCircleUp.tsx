import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowCircleUp = (props: SvgProps) => {
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
        d="M0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12ZM7.10625 13.3547L10.5 9.81562V18.375C10.5 18.9984 11.0016 19.5 11.625 19.5H12.375C12.9984 19.5 13.5 18.9984 13.5 18.375V9.81562L16.8937 13.3547C17.3297 13.8094 18.0563 13.8187 18.5016 13.3734L19.0125 12.8578C19.4531 12.4172 19.4531 11.7047 19.0125 11.2687L12.7969 5.04844C12.3562 4.60781 11.6438 4.60781 11.2078 5.04844L4.98281 11.2687C4.54219 11.7094 4.54219 12.4219 4.98281 12.8578L5.49375 13.3734C5.94375 13.8187 6.67031 13.8094 7.10625 13.3547Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowCircleUp.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowCircleUp)

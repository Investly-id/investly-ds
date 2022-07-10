import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Lock = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <Path
        d="M8.4375 4.375H7.96875V2.96875C7.96875 1.33203 6.63672 0 5 0C3.36328 0 2.03125 1.33203 2.03125 2.96875V4.375H1.5625C1.04492 4.375 0.625 4.79492 0.625 5.3125V9.0625C0.625 9.58008 1.04492 10 1.5625 10H8.4375C8.95508 10 9.375 9.58008 9.375 9.0625V5.3125C9.375 4.79492 8.95508 4.375 8.4375 4.375ZM6.40625 4.375H3.59375V2.96875C3.59375 2.19336 4.22461 1.5625 5 1.5625C5.77539 1.5625 6.40625 2.19336 6.40625 2.96875V4.375Z"
        fill={fill}
      />
    </Svg>
  )
}

Lock.defaultProps = {
  fill: '#45494A',
  width: 10,
  height: 10,
}

export default React.memo(Lock)

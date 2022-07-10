import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Send = (props: SvgProps) => {
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
        d="M5.694 12 2.299 3.272c-.236-.607.356-1.188.942-.982l.093.04 18 9a.75.75 0 0 1 .097 1.283l-.097.058-18 9a.75.75 0 0 1-1.065-.847l.03-.096L5.694 12 2.299 3.272 5.694 12ZM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12 4.401 4.54Z"
        fill={fill}
      />
    </Svg>
  )
}

Send.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Send)

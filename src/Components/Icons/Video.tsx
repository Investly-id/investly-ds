import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Video = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <Path
        d='M14.0083 4H1.99167C0.891667 4 0 4.89167 0 5.99167V18.0083C0 19.1083 0.891667 20 1.99167 20H14.0083C15.1083 20 16 19.1083 16 18.0083V5.99167C16 4.89167 15.1083 4 14.0083 4ZM21.9 5.57083L17.3333 8.72083V15.2792L21.9 18.425C22.7833 19.0333 24 18.4125 24 17.35V6.64583C24 5.5875 22.7875 4.9625 21.9 5.57083Z'
        fill={fill}
      />
    </Svg>
  )
}

Video.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Video)

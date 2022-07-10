import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Box = (props: SvgProps) => {
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
        d="M23.8828 8.65313L21.5109 1.5375C21.2062 0.61875 20.3484 0 19.3781 0H12.75V9H23.9391C23.9203 8.88281 23.9203 8.76562 23.8828 8.65313ZM11.25 0H4.62187C3.65156 0 2.79375 0.61875 2.48906 1.5375L0.117188 8.65313C0.0796875 8.76562 0.0796875 8.88281 0.0609375 9H11.25V0ZM0 10.5V21.75C0 22.9922 1.00781 24 2.25 24H21.75C22.9922 24 24 22.9922 24 21.75V10.5H0Z"
        fill={fill}
      />
    </Svg>
  )
}

Box.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Box)

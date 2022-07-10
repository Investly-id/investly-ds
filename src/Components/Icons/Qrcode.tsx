import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Qrcode = (props: SvgProps) => {
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
        d="M1.5 10.5H10.5V1.5H1.5V10.5ZM4.5 4.5H7.5V7.5H4.5V4.5ZM13.5 1.5V10.5H22.5V1.5H13.5ZM19.5 7.5H16.5V4.5H19.5V7.5ZM1.5 22.5H10.5V13.5H1.5V22.5ZM4.5 16.5H7.5V19.5H4.5V16.5ZM21 13.5H22.5V19.5H18V18H16.5V22.5H13.5V13.5H18V15H21V13.5ZM21 21H22.5V22.5H21V21ZM18 21H19.5V22.5H18V21Z"
        fill={fill}
      />
    </Svg>
  )
}

Qrcode.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Qrcode)

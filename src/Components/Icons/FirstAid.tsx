import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const FirstAid = (props: SvgProps) => {
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
        d="M0 4.66666V19.3333C0 20.4375 0.895833 21.3333 2 21.3333H4V2.66666H2C0.895833 2.66666 0 3.5625 0 4.66666ZM5.33333 21.3333H18.6667V2.66666H5.33333V21.3333ZM8 11C8 10.8167 8.15 10.6667 8.33333 10.6667H10.6667V8.33333C10.6667 8.15 10.8167 8 11 8H13C13.1833 8 13.3333 8.15 13.3333 8.33333V10.6667H15.6667C15.85 10.6667 16 10.8167 16 11V13C16 13.1833 15.85 13.3333 15.6667 13.3333H13.3333V15.6667C13.3333 15.85 13.1833 16 13 16H11C10.8167 16 10.6667 15.85 10.6667 15.6667V13.3333H8.33333C8.15 13.3333 8 13.1833 8 13V11ZM22 2.66666H20V21.3333H22C23.1042 21.3333 24 20.4375 24 19.3333V4.66666C24 3.5625 23.1042 2.66666 22 2.66666Z"
        fill={fill}
      />
    </Svg>
  )
}

FirstAid.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(FirstAid)

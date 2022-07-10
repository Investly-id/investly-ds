import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Pen = (props: SvgProps) => {
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
        d="M13.6284 4.37064L19.6294 10.3716L6.59857 23.4024L1.24826 23.993C0.532006 24.0722 -0.07315 23.4666 0.00653752 22.7503L0.60185 17.3963L13.6284 4.37064ZM23.3409 3.4772L20.5233 0.659546C19.6444 -0.21936 18.2189 -0.21936 17.34 0.659546L14.6892 3.31033L20.6901 9.31126L23.3409 6.66048C24.2198 5.78111 24.2198 4.35611 23.3409 3.4772Z"
        fill={fill}
      />
    </Svg>
  )
}

Pen.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Pen)

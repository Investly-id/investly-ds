import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const PhoneAlt = (props: SvgProps) => {
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
        d="M23.3152 16.9594L18.0652 14.7094C17.8409 14.6138 17.5916 14.5937 17.3549 14.652C17.1182 14.7103 16.9068 14.844 16.7527 15.0328L14.4277 17.8735C10.7788 16.153 7.84228 13.2165 6.12188 9.56767L8.9625 7.24267C9.15172 7.08877 9.28565 6.87741 9.34401 6.64059C9.40237 6.40376 9.38199 6.15437 9.28594 5.93017L7.03594 0.680174C6.93052 0.43849 6.74408 0.241164 6.50876 0.12222C6.27344 0.00327617 6.00399 -0.0298296 5.74687 0.0286112L0.871875 1.15361C0.623986 1.21085 0.402818 1.35043 0.24447 1.54956C0.0861212 1.74868 -5.71036e-05 1.9956 2.83885e-08 2.25002C2.83885e-08 14.2735 9.74531 24 21.75 24C22.0045 24.0002 22.2515 23.9141 22.4507 23.7557C22.65 23.5973 22.7896 23.3761 22.8469 23.1281L23.9719 18.2531C24.0299 17.9948 23.9961 17.7243 23.8763 17.4881C23.7564 17.252 23.558 17.065 23.3152 16.9594Z"
        fill={fill}
      />
    </Svg>
  )
}

PhoneAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(PhoneAlt)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const PaperPlane = (props: SvgProps) => {
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
        d="M22.3125 0.149939L0.585954 12.6843C-0.262483 13.1718 -0.15467 14.3531 0.68908 14.7093L5.67189 16.7999L19.1391 4.93119C19.3969 4.7015 19.7625 5.05306 19.5422 5.32025L8.25002 19.0781V22.8515C8.25002 23.9578 9.58595 24.3937 10.2422 23.5921L13.2188 19.9687L19.0594 22.4156C19.725 22.6968 20.4844 22.2796 20.6063 21.5624L23.9813 1.31244C24.1406 0.365564 23.1235 -0.318811 22.3125 0.149939Z"
        fill={fill}
      />
    </Svg>
  )
}

PaperPlane.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(PaperPlane)

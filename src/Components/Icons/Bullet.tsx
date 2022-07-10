import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'

const Bullet = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 10 10"
      {...props}
    >
      <Circle cx={5} cy={5} r={2} fill="#fff" stroke={fill} strokeWidth={2} />
    </Svg>
  )
}

Bullet.defaultProps = {
  fill: '#067EB8',
  width: 10,
  height: 10,
}

export default React.memo(Bullet)

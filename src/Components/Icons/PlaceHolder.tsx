import * as React from 'react'
import Svg, { SvgProps, Rect } from 'react-native-svg'

const PlaceHolder = (props: SvgProps) => {
  const { width, height } = props
  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Rect
        height="23"
        width="23"
        rx="3.5"
        stroke="white"
        strokeDasharray="4 4"
        strokeLinecap="round"
        x="0.5"
        y="0.5"
      />
    </Svg>
  )
}

PlaceHolder.defaultProps = {
  width: 24,
  height: 24,
}

export default React.memo(PlaceHolder)

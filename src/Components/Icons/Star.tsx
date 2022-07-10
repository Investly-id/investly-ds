import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Star = (props: SvgProps) => {
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
        d="M10.8042 2.075L8.08334 7.59167L1.99584 8.47917C0.904176 8.6375 0.466676 9.98334 1.25834 10.7542L5.66251 15.0458L4.62084 21.1083C4.43334 22.2042 5.58751 23.025 6.55418 22.5125L12 19.65L17.4458 22.5125C18.4125 23.0208 19.5667 22.2042 19.3792 21.1083L18.3375 15.0458L22.7417 10.7542C23.5333 9.98334 23.0958 8.6375 22.0042 8.47917L15.9167 7.59167L13.1958 2.075C12.7083 1.09167 11.2958 1.07917 10.8042 2.075Z"
        fill={fill}
      />
    </Svg>
  )
}

Star.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Star)

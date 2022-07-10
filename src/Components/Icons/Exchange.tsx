import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Exchange = (props: SvgProps) => {
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
        d="M0 7.875V7.125C0 6.50367 0.503672 6 1.125 6H18V3.75C18 2.74842 19.214 2.24803 19.9205 2.95448L23.6705 6.70448C24.1098 7.14384 24.1098 7.85616 23.6705 8.29547L19.9205 12.0455C19.2167 12.7492 18 12.2558 18 11.25V9H1.125C0.503672 9 0 8.49633 0 7.875ZM22.875 15H6V12.75C6 11.7509 4.78772 11.2463 4.07948 11.9545L0.329484 15.7045C-0.109828 16.1438 -0.109828 16.8562 0.329484 17.2955L4.07948 21.0455C4.78392 21.7499 6 21.2549 6 20.25V18H22.875C23.4963 18 24 17.4963 24 16.875V16.125C24 15.5037 23.4963 15 22.875 15Z"
        fill={fill}
      />
    </Svg>
  )
}

Exchange.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Exchange)

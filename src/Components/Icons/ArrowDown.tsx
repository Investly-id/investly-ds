import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowDown = (props: SvgProps) => {
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
        d="M20.8641 10.4297L21.9047 11.4703C22.3453 11.9109 22.3453 12.6234 21.9047 13.0594L12.7969 22.1719C12.3563 22.6125 11.6438 22.6125 11.2078 22.1719L2.09532 13.0594C1.65469 12.6187 1.65469 11.9062 2.09532 11.4703L3.13594 10.4297C3.58125 9.98437 4.30782 9.99375 4.74375 10.4484L10.125 16.0969V2.625C10.125 2.00156 10.6266 1.5 11.25 1.5H12.75C13.3734 1.5 13.875 2.00156 13.875 2.625V16.0969L19.2563 10.4484C19.6922 9.98906 20.4188 9.97969 20.8641 10.4297Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowDown.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowDown)

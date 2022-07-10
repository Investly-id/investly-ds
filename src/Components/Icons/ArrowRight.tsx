import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowRight = (props: SvgProps) => {
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
        d="M10.4297 3.13594L11.4703 2.09532C11.9109 1.65469 12.6234 1.65469 13.0594 2.09532L22.1719 11.2031C22.6125 11.6438 22.6125 12.3563 22.1719 12.7922L13.0594 21.9047C12.6187 22.3453 11.9062 22.3453 11.4703 21.9047L10.4297 20.8641C9.98437 20.4188 9.99375 19.6922 10.4484 19.2563L16.0969 13.875H2.625C2.00156 13.875 1.5 13.3734 1.5 12.75V11.25C1.5 10.6266 2.00156 10.125 2.625 10.125H16.0969L10.4484 4.74375C9.98906 4.30782 9.97969 3.58125 10.4297 3.13594Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowRight.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowRight)

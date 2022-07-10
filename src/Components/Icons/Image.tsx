import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Image = (props: SvgProps) => {
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
        d="M21.75 21H2.25C1.00734 21 0 19.9927 0 18.75V5.25C0 4.00734 1.00734 3 2.25 3H21.75C22.9927 3 24 4.00734 24 5.25V18.75C24 19.9927 22.9927 21 21.75 21ZM5.25 5.625C3.80025 5.625 2.625 6.80025 2.625 8.25C2.625 9.69975 3.80025 10.875 5.25 10.875C6.69975 10.875 7.875 9.69975 7.875 8.25C7.875 6.80025 6.69975 5.625 5.25 5.625ZM3 18H21V12.75L16.8977 8.64773C16.6781 8.42808 16.3219 8.42808 16.1022 8.64773L9.75 15L7.14773 12.3977C6.92808 12.1781 6.57192 12.1781 6.35222 12.3977L3 15.75V18Z"
        fill={fill}
      />
    </Svg>
  )
}

Image.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Image)

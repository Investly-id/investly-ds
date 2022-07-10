import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const QuoteLeft = (props: SvgProps) => {
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
        d="M21.75 12H18V9C18 7.34531 19.3453 6 21 6H21.375C21.9984 6 22.5 5.49844 22.5 4.875V2.625C22.5 2.00156 21.9984 1.5 21.375 1.5H21C16.8563 1.5 13.5 4.85625 13.5 9V20.25C13.5 21.4922 14.5078 22.5 15.75 22.5H21.75C22.9922 22.5 24 21.4922 24 20.25V14.25C24 13.0078 22.9922 12 21.75 12ZM8.25 12H4.5V9C4.5 7.34531 5.84531 6 7.5 6H7.875C8.49844 6 9 5.49844 9 4.875V2.625C9 2.00156 8.49844 1.5 7.875 1.5H7.5C3.35625 1.5 0 4.85625 0 9V20.25C0 21.4922 1.00781 22.5 2.25 22.5H8.25C9.49219 22.5 10.5 21.4922 10.5 20.25V14.25C10.5 13.0078 9.49219 12 8.25 12Z"
        fill={fill}
      />
    </Svg>
  )
}

QuoteLeft.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(QuoteLeft)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const QuoteRight = (props: SvgProps) => {
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
        d="M21.75 1.5H15.75C14.5078 1.5 13.5 2.50781 13.5 3.75V9.75C13.5 10.9922 14.5078 12 15.75 12H19.5V15C19.5 16.6547 18.1547 18 16.5 18H16.125C15.5016 18 15 18.5016 15 19.125V21.375C15 21.9984 15.5016 22.5 16.125 22.5H16.5C20.6437 22.5 24 19.1437 24 15V3.75C24 2.50781 22.9922 1.5 21.75 1.5ZM8.25 1.5H2.25C1.00781 1.5 0 2.50781 0 3.75V9.75C0 10.9922 1.00781 12 2.25 12H6V15C6 16.6547 4.65469 18 3 18H2.625C2.00156 18 1.5 18.5016 1.5 19.125V21.375C1.5 21.9984 2.00156 22.5 2.625 22.5H3C7.14375 22.5 10.5 19.1437 10.5 15V3.75C10.5 2.50781 9.49219 1.5 8.25 1.5Z"
        fill={fill}
      />
    </Svg>
  )
}

QuoteRight.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(QuoteRight)

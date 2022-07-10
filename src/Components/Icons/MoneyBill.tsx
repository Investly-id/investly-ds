import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const MoneyBill = (props: SvgProps) => {
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
        d="M22.8 4.8H1.2C0.537375 4.8 0 5.33737 0 6V18C0 18.6626 0.537375 19.2 1.2 19.2H22.8C23.4626 19.2 24 18.6626 24 18V6C24 5.33737 23.4626 4.8 22.8 4.8ZM1.8 17.4V15C3.12563 15 4.2 16.0744 4.2 17.4H1.8ZM1.8 9V6.6H4.2C4.2 7.92562 3.12563 9 1.8 9ZM12 15.6C10.3429 15.6 9 13.9879 9 12C9 10.0117 10.3433 8.4 12 8.4C13.6568 8.4 15 10.0117 15 12C15 13.9886 13.6564 15.6 12 15.6ZM22.2 17.4H19.8C19.8 16.0744 20.8744 15 22.2 15V17.4ZM22.2 9C20.8744 9 19.8 7.92562 19.8 6.6H22.2V9Z"
        fill={fill}
      />
    </Svg>
  )
}

MoneyBill.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(MoneyBill)

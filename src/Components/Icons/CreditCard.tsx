import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CreditCard = (props: SvgProps) => {
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
        d="M0 19.3333C0 20.4375 0.895833 21.3333 2 21.3333H22C23.1042 21.3333 24 20.4375 24 19.3333V12H0V19.3333ZM8 16.5C8 16.225 8.225 16 8.5 16H14.1667C14.4417 16 14.6667 16.225 14.6667 16.5V18.1667C14.6667 18.4417 14.4417 18.6667 14.1667 18.6667H8.5C8.225 18.6667 8 18.4417 8 18.1667V16.5ZM2.66667 16.5C2.66667 16.225 2.89167 16 3.16667 16H6.16667C6.44167 16 6.66667 16.225 6.66667 16.5V18.1667C6.66667 18.4417 6.44167 18.6667 6.16667 18.6667H3.16667C2.89167 18.6667 2.66667 18.4417 2.66667 18.1667V16.5ZM24 4.66667V6.66667H0V4.66667C0 3.5625 0.895833 2.66667 2 2.66667H22C23.1042 2.66667 24 3.5625 24 4.66667Z"
        fill={fill}
      />
    </Svg>
  )
}

CreditCard.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(CreditCard)

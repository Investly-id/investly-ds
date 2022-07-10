import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const MobileAlt = (props: SvgProps) => {
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
        d="M17.25 0H6.75C5.50781 0 4.5 1.00781 4.5 2.25V21.75C4.5 22.9922 5.50781 24 6.75 24H17.25C18.4922 24 19.5 22.9922 19.5 21.75V2.25C19.5 1.00781 18.4922 0 17.25 0ZM12 22.5C11.1703 22.5 10.5 21.8297 10.5 21C10.5 20.1703 11.1703 19.5 12 19.5C12.8297 19.5 13.5 20.1703 13.5 21C13.5 21.8297 12.8297 22.5 12 22.5ZM17.25 17.4375C17.25 17.7469 16.9969 18 16.6875 18H7.3125C7.00312 18 6.75 17.7469 6.75 17.4375V2.8125C6.75 2.50312 7.00312 2.25 7.3125 2.25H16.6875C16.9969 2.25 17.25 2.50312 17.25 2.8125V17.4375Z"
        fill={fill}
      />
    </Svg>
  )
}

MobileAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(MobileAlt)

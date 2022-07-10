import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Check = (props: SvgProps) => {
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
        d="M8.15146 20.5971L0.351457 12.7971C-0.117152 12.3285 -0.117152 11.5687 0.351457 11.1L2.04847 9.40294C2.51708 8.93428 3.27693 8.93428 3.74553 9.40294L8.99999 14.6573L20.2544 3.40294C20.7231 2.93433 21.4829 2.93433 21.9515 3.40294L23.6485 5.1C24.1171 5.56861 24.1171 6.32841 23.6485 6.79706L9.84852 20.5971C9.37986 21.0657 8.62007 21.0657 8.15146 20.5971Z"
        fill={fill}
      />
    </Svg>
  )
}

Check.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Check)

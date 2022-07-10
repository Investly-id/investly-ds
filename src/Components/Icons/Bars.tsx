import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Bars = (props: SvgProps) => {
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
        d="M2.25 6.1875H21.75C22.1642 6.1875 22.5 5.85173 22.5 5.4375V3.5625C22.5 3.14827 22.1642 2.8125 21.75 2.8125H2.25C1.83577 2.8125 1.5 3.14827 1.5 3.5625V5.4375C1.5 5.85173 1.83577 6.1875 2.25 6.1875ZM2.25 13.6875H21.75C22.1642 13.6875 22.5 13.3517 22.5 12.9375V11.0625C22.5 10.6483 22.1642 10.3125 21.75 10.3125H2.25C1.83577 10.3125 1.5 10.6483 1.5 11.0625V12.9375C1.5 13.3517 1.83577 13.6875 2.25 13.6875ZM2.25 21.1875H21.75C22.1642 21.1875 22.5 20.8517 22.5 20.4375V18.5625C22.5 18.1483 22.1642 17.8125 21.75 17.8125H2.25C1.83577 17.8125 1.5 18.1483 1.5 18.5625V20.4375C1.5 20.8517 1.83577 21.1875 2.25 21.1875Z"
        fill={fill}
      />
    </Svg>
  )
}

Bars.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Bars)

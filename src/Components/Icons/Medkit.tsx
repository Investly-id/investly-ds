import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Medkit = (props: SvgProps) => {
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
        d="M4.5 22.5H19.5V6H18V3.75C18 2.50734 16.9927 1.5 15.75 1.5H8.25C7.00734 1.5 6 2.50734 6 3.75V6H4.5V22.5ZM9 4.5H15V6H9V4.5ZM24 8.25V20.25C24 21.4927 22.9927 22.5 21.75 22.5H21V6H21.75C22.9927 6 24 7.00734 24 8.25ZM3 22.5H2.25C1.00734 22.5 0 21.4927 0 20.25V8.25C0 7.00734 1.00734 6 2.25 6H3V22.5ZM16.5 12.75V14.25C16.5 14.6642 16.1642 15 15.75 15H13.5V17.25C13.5 17.6642 13.1642 18 12.75 18H11.25C10.8358 18 10.5 17.6642 10.5 17.25V15H8.25C7.83577 15 7.5 14.6642 7.5 14.25V12.75C7.5 12.3358 7.83577 12 8.25 12H10.5V9.75C10.5 9.33577 10.8358 9 11.25 9H12.75C13.1642 9 13.5 9.33577 13.5 9.75V12H15.75C16.1642 12 16.5 12.3358 16.5 12.75Z"
        fill={fill}
      />
    </Svg>
  )
}

Medkit.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Medkit)

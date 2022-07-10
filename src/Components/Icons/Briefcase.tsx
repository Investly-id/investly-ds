import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Briefcase = (props: SvgProps) => {
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
        d="M15 15.75C15 16.1644 14.6644 16.5 14.25 16.5H9.75C9.33562 16.5 9 16.1644 9 15.75V13.5H0V20.25C0 21.45 1.05 22.5 2.25 22.5H21.75C22.95 22.5 24 21.45 24 20.25V13.5H15V15.75ZM21.75 6H18V3.75C18 2.55 16.95 1.5 15.75 1.5H8.25C7.05 1.5 6 2.55 6 3.75V6H2.25C1.05 6 0 7.05 0 8.25V12H24V8.25C24 7.05 22.95 6 21.75 6ZM15 6H9V4.5H15V6Z"
        fill={fill}
      />
    </Svg>
  )
}

Briefcase.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Briefcase)

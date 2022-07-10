import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const GlassWhieskey = (props: SvgProps) => {
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
        d="M22.5 1.5H1.49996C0.5859 1.5 -0.112537 2.30625 0.0140253 3.21094L2.63902 19.9219C2.84996 21.3984 4.11559 22.4953 5.6109 22.4953H18.4078C19.8984 22.4953 21.1687 21.3984 21.3796 19.9219L23.9859 3.21094C24.1125 2.30625 23.414 1.5 22.5 1.5ZM20.7468 4.5L19.3406 13.5H4.66871L3.25309 4.5H20.7468Z"
        fill={fill}
      />
    </Svg>
  )
}

GlassWhieskey.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(GlassWhieskey)

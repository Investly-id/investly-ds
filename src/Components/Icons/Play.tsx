import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Play = (props: SvgProps) => {
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
        d="M21.3937 10.0641L4.89375 0.309436C3.55312 -0.482751 1.5 0.285999 1.5 2.24537V21.7501C1.5 23.5079 3.40781 24.5672 4.89375 23.686L21.3937 13.936C22.8656 13.0688 22.8703 10.9313 21.3937 10.0641Z"
        fill={fill}
      />
    </Svg>
  )
}

Play.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Play)

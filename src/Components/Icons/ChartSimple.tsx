import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChartSimple = (props: SvgProps) => {
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
        d="M9.143 4.143c0-1.184.96-2.143 2.143-2.143h1.428c1.183 0 2.143.96 2.143 2.143v15.714c0 1.183-.96 2.143-2.143 2.143h-1.428a2.143 2.143 0 0 1-2.143-2.143V4.143ZM2 12.714c0-1.183.96-2.143 2.143-2.143H5.57c1.183 0 2.143.96 2.143 2.143v7.143c0 1.183-.96 2.143-2.143 2.143H4.143A2.143 2.143 0 0 1 2 19.857v-7.143Zm17.857-7.857C21.04 4.857 22 5.817 22 7v12.857C22 21.04 21.04 22 19.857 22H18.43a2.143 2.143 0 0 1-2.143-2.143V7c0-1.183.96-2.143 2.143-2.143h1.428Z"
        fill={fill}
      />
    </Svg>
  )
}

ChartSimple.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChartSimple)

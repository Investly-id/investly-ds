import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronUp = (props: SvgProps) => {
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
        d="M12.7955 6.11831L21.9054 15.2281C22.3447 15.6675 22.3447 16.3798 21.9054 16.8191L20.8428 17.8816C20.4042 18.3203 19.6934 18.3211 19.2537 17.8835L12 10.6638L4.74634 17.8836C4.3067 18.3211 3.59584 18.3203 3.15723 17.8817L2.09472 16.8192C1.65536 16.3798 1.65536 15.6675 2.09472 15.2282L11.2045 6.11836C11.6439 5.679 12.3562 5.679 12.7955 6.11831Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronUp.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronUp)

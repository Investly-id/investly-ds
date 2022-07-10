import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronDown = (props: SvgProps) => {
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
        d="M11.2045 17.8817L2.09466 8.77181C1.6553 8.33245 1.6553 7.62014 2.09466 7.18083L3.15717 6.11831C3.59578 5.6797 4.30664 5.67886 4.74628 6.11644L12 13.3362L19.2537 6.11644C19.6933 5.67886 20.4042 5.6797 20.8428 6.11831L21.9053 7.18083C22.3447 7.62019 22.3447 8.3325 21.9053 8.77181L12.7955 17.8817C12.3562 18.321 11.6438 18.321 11.2045 17.8817Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronDown.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronDown)

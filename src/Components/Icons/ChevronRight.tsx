import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronRight = (props: SvgProps) => {
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
        d="M17.8817 12.7955L8.77183 21.9053C8.33247 22.3447 7.62016 22.3447 7.18084 21.9053L6.11833 20.8428C5.67972 20.4042 5.67887 19.6934 6.11645 19.2537L13.3362 12L6.11645 4.74633C5.67887 4.30669 5.67972 3.59583 6.11833 3.15722L7.18084 2.0947C7.6202 1.65534 8.33251 1.65534 8.77183 2.0947L17.8817 11.2045C18.321 11.6438 18.321 12.3562 17.8817 12.7955Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronRight.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronRight)

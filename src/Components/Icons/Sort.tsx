import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Sort = (props: SvgProps) => {
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
        d="M6.42187 13.5H17.5781C18.5812 13.5 19.0828 14.7141 18.375 15.4219L12.7969 21C12.3562 21.4406 11.6437 21.4406 11.2078 21L5.625 15.4219C4.91718 14.7141 5.41875 13.5 6.42187 13.5ZM18.375 8.57813L12.7969 3C12.3562 2.55938 11.6437 2.55938 11.2078 3L5.625 8.57813C4.91718 9.28594 5.41875 10.5 6.42187 10.5H17.5781C18.5812 10.5 19.0828 9.28594 18.375 8.57813Z"
        fill={fill}
      />
    </Svg>
  )
}

Sort.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Sort)

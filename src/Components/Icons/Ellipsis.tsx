import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Ellipsis = (props: SvgProps) => {
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
        d="M12 8.625A3.373 3.373 0 0 1 15.375 12 3.373 3.373 0 0 1 12 15.375 3.373 3.373 0 0 1 8.625 12 3.373 3.373 0 0 1 12 8.625ZM8.625 3.75A3.373 3.373 0 0 0 12 7.125a3.373 3.373 0 0 0 3.375-3.375A3.373 3.373 0 0 0 12 .375 3.373 3.373 0 0 0 8.625 3.75Zm0 16.5A3.373 3.373 0 0 0 12 23.625a3.373 3.373 0 0 0 3.375-3.375A3.373 3.373 0 0 0 12 16.875a3.373 3.373 0 0 0-3.375 3.375Z"
        fill={fill}
      />
    </Svg>
  )
}

Ellipsis.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Ellipsis)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const AngleDoubleDown = (props: SvgProps) => {
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
        d="M11.2031 12.0141L4.82812 5.63906C4.38749 5.19844 4.38749 4.48594 4.82812 4.05L5.88749 2.99062C6.32812 2.55 7.04062 2.55 7.47656 2.99062L11.9953 7.50937L16.5141 2.99062C16.9547 2.55 17.6672 2.55 18.1031 2.99062L19.1719 4.04531C19.6125 4.48594 19.6125 5.19844 19.1719 5.63437L12.7969 12.0094C12.3562 12.4547 11.6437 12.4547 11.2031 12.0141ZM12.7969 21.0141L19.1719 14.6391C19.6125 14.1984 19.6125 13.4859 19.1719 13.05L18.1125 11.9906C17.6719 11.55 16.9594 11.55 16.5234 11.9906L12 16.5047L7.48124 11.9859C7.04062 11.5453 6.32812 11.5453 5.89218 11.9859L4.82812 13.0453C4.38749 13.4859 4.38749 14.1984 4.82812 14.6344L11.2031 21.0094C11.6437 21.4547 12.3562 21.4547 12.7969 21.0141Z"
        fill={fill}
      />
    </Svg>
  )
}

AngleDoubleDown.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(AngleDoubleDown)

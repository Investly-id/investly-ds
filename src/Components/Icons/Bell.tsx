import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Bell = (props: SvgProps) => {
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
        d="M12 24a3 3 0 002.999-3H9A3 3 0 0012 24zm10.096-7.018c-.905-.973-2.6-2.437-2.6-7.232 0-3.642-2.553-6.558-5.997-7.273V1.5a1.5 1.5 0 10-2.998 0v.977c-3.443.715-5.997 3.63-5.997 7.273 0 4.795-1.695 6.26-2.6 7.232A1.465 1.465 0 001.5 18c.005.769.608 1.5 1.505 1.5h17.99c.897 0 1.5-.731 1.505-1.5a1.464 1.464 0 00-.404-1.018z"
        fill={fill}
      />
    </Svg>
  )
}

Bell.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Bell)

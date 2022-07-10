import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const MapMarkerAlt = (props: SvgProps) => {
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
        d="M11.0751 23.5158C4.26422 13.6421 3 12.6287 3 9C3 4.02942 7.02942 0 12 0C16.9706 0 21 4.02942 21 9C21 12.6287 19.7358 13.6421 12.9249 23.5158C12.478 24.1614 11.522 24.1614 11.0751 23.5158ZM12 12.75C14.0711 12.75 15.75 11.0711 15.75 9C15.75 6.92892 14.0711 5.25 12 5.25C9.92892 5.25 8.25 6.92892 8.25 9C8.25 11.0711 9.92892 12.75 12 12.75Z"
        fill={fill}
      />
    </Svg>
  )
}

MapMarkerAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(MapMarkerAlt)
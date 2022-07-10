import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Times = (props: SvgProps) => {
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
        d="M15.1275 12L19.8183 7.30922C20.3939 6.73359 20.3939 5.80031 19.8183 5.22422L18.7758 4.18172C18.2002 3.60609 17.2669 3.60609 16.6908 4.18172L12 8.8725L7.30922 4.18172C6.73359 3.60609 5.80031 3.60609 5.22422 4.18172L4.18172 5.22422C3.60609 5.79984 3.60609 6.73312 4.18172 7.30922L8.8725 12L4.18172 16.6908C3.60609 17.2664 3.60609 18.1997 4.18172 18.7758L5.22422 19.8183C5.79984 20.3939 6.73359 20.3939 7.30922 19.8183L12 15.1275L16.6908 19.8183C17.2664 20.3939 18.2002 20.3939 18.7758 19.8183L19.8183 18.7758C20.3939 18.2002 20.3939 17.2669 19.8183 16.6908L15.1275 12Z"
        fill={fill}
      />
    </Svg>
  )
}

Times.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Times)

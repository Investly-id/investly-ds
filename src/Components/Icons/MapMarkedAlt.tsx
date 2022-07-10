import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const MapMarkedAlt = (props: SvgProps) => {
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
        d="M12 1.33334C9.10042 1.33334 6.75 3.68375 6.75 6.58334C6.75 8.9275 10.1812 13.2 11.4958 14.7508C11.7621 15.065 12.2383 15.065 12.5042 14.7508C13.8188 13.2 17.25 8.9275 17.25 6.58334C17.25 3.68375 14.8996 1.33334 12 1.33334ZM12 8.33334C11.0333 8.33334 10.25 7.55 10.25 6.58334C10.25 5.61667 11.0333 4.83334 12 4.83334C12.9667 4.83334 13.75 5.61667 13.75 6.58334C13.75 7.55 12.9667 8.33334 12 8.33334ZM0.838333 10.3313C0.590908 10.4302 0.378804 10.601 0.229379 10.8217C0.0799536 11.0423 5.92587e-05 11.3027 0 11.5692L0 21.9992C0 22.4708 0.47625 22.7933 0.914167 22.6183L6.66667 20V10.2883C6.29833 9.6225 5.99708 8.97417 5.78125 8.35417L0.838333 10.3313ZM12 16.3196C11.4138 16.3196 10.8592 16.0621 10.4788 15.6129C9.65958 14.6463 8.78833 13.5454 8 12.4163V19.9996L16 22.6663V12.4167C15.2117 13.5454 14.3408 14.6467 13.5213 15.6133C13.1408 16.0621 12.5863 16.3196 12 16.3196ZM23.0858 8.04834L17.3333 10.6667V22.6667L23.1617 20.3354C23.4091 20.2365 23.6213 20.0657 23.7707 19.845C23.9201 19.6244 24 19.364 24 19.0975V8.6675C24 8.19584 23.5238 7.87334 23.0858 8.04834Z"
        fill={fill}
      />
    </Svg>
  )
}

MapMarkedAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(MapMarkedAlt)

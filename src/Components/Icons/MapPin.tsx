// @ts-nocheck
import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg'

const MapPin = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 12 12'
      fill='none'
      {...props}
    >
      <G clipPath='url(#clip0_11123_11377)'>
        <Path
          d='M5.50003 6.95228V9.40061L5.8441 9.91656C5.91832 10.0278 6.08192 10.0278 6.15614 9.91656L6.50005 9.40061V6.95228C6.33771 6.98228 6.17098 7.0001 6.00004 7.0001C5.8291 7.0001 5.66238 6.98228 5.50003 6.95228ZM6.00004 2C4.75736 2 3.75 3.00736 3.75 4.25004C3.75 5.49272 4.75736 6.50009 6.00004 6.50009C7.24272 6.50009 8.25009 5.49272 8.25009 4.25004C8.25009 3.00736 7.24272 2 6.00004 2ZM6.00004 3.18752C5.4141 3.18752 4.93752 3.6641 4.93752 4.25004C4.93752 4.35348 4.85346 4.43755 4.75002 4.43755C4.64658 4.43755 4.56252 4.35348 4.56252 4.25004C4.56252 3.45737 5.20753 2.81252 6.00004 2.81252C6.10348 2.81252 6.18755 2.89658 6.18755 3.00002C6.18755 3.10346 6.10348 3.18752 6.00004 3.18752Z'
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_11123_11377'>
          <Rect
            width='4.50009'
            height='8'
            fill='white'
            transform='translate(3.75 2)'
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

MapPin.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(MapPin)

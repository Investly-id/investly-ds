// @ts-nocheck
import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'

const UserGroup = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <G clipPath='url(#a)'>
        <Path
          d='M8 12c1.934 0 3.5-1.566 3.5-3.5S9.934 5 8 5a3.498 3.498 0 0 0-3.5 3.5C4.5 10.434 6.066 12 8 12Zm2.4 1h-.26c-.65.313-1.371.5-2.14.5a4.933 4.933 0 0 1-2.14-.5H5.6A3.6 3.6 0 0 0 2 16.6v.9A1.5 1.5 0 0 0 3.5 19h9a1.5 1.5 0 0 0 1.5-1.5v-.9a3.6 3.6 0 0 0-3.6-3.6Zm6.6-1a3 3 0 1 0-.002-6.002A3 3 0 0 0 17 12Zm1.5 1h-.119a4.21 4.21 0 0 1-1.381.25c-.488 0-.947-.1-1.381-.25H15.5a3.47 3.47 0 0 0-1.74.481A4.573 4.573 0 0 1 15 16.6v1.2c0 .069-.016.134-.019.2H20.5a1.5 1.5 0 0 0 1.5-1.5c0-1.934-1.566-3.5-3.5-3.5Z'
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' transform='translate(2 5)' d='M0 0h20v14H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

UserGroup.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(UserGroup)

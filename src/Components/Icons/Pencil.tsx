// @ts-nocheck
import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'

const Pencil = (props: SvgProps) => {
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
          d='m13.357 5.642 5 5L7.5 21.503l-4.459.492a.938.938 0 0 1-1.035-1.036l.496-4.461L13.357 5.642Zm8.094-.745L19.103 2.55a1.876 1.876 0 0 0-2.653 0l-2.21 2.21 5.002 5L21.45 7.55a1.876 1.876 0 0 0 0-2.653Z'
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' transform='translate(2 2)' d='M0 0h20v20H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Pencil.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Pencil)

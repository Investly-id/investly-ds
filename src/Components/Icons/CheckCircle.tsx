// @ts-nocheck
import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'

const CheckCircle = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      height={height}
      width={width}
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <G clipPath='url(#a)'>
        <Path
          d='M18 10.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8.925 4.236L15.01 8.8a.516.516 0 0 0 0-.73l-.73-.73a.516.516 0 0 0-.73 0l-4.84 4.841-2.26-2.26a.516.516 0 0 0-.73 0l-.73.73a.516.516 0 0 0 0 .73l3.355 3.355a.516.516 0 0 0 .73 0Z'
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' transform='translate(2 2.5)' d='M0 0h16v16H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

CheckCircle.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(CheckCircle)

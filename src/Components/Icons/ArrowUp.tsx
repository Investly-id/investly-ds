import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowUp = (props: SvgProps) => {
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
        d="M3.13594 13.5703L2.09532 12.5297C1.65469 12.0891 1.65469 11.3766 2.09532 10.9406L11.2031 1.82812C11.6438 1.38749 12.3563 1.38749 12.7922 1.82812L21.9 10.9359C22.3406 11.3766 22.3406 12.0891 21.9 12.525L20.8594 13.5656C20.4141 14.0109 19.6875 14.0016 19.2516 13.5469L13.875 7.90312V21.375C13.875 21.9984 13.3734 22.5 12.75 22.5H11.25C10.6266 22.5 10.125 21.9984 10.125 21.375V7.90312L4.74375 13.5516C4.30782 14.0109 3.58125 14.0203 3.13594 13.5703Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowUp.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowUp)

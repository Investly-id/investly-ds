import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => {
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
        d="M13.5703 20.8641L12.5297 21.9047C12.0891 22.3453 11.3766 22.3453 10.9406 21.9047L1.82813 12.7969C1.3875 12.3563 1.3875 11.6438 1.82813 11.2078L10.9406 2.09532C11.3813 1.65469 12.0938 1.65469 12.5297 2.09532L13.5703 3.13594C14.0156 3.58125 14.0063 4.30782 13.5516 4.74375L7.90313 10.125H21.375C21.9984 10.125 22.5 10.6266 22.5 11.25V12.75C22.5 13.3734 21.9984 13.875 21.375 13.875H7.90313L13.5516 19.2563C14.0109 19.6922 14.0203 20.4188 13.5703 20.8641Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowLeft.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowLeft)

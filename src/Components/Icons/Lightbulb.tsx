import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Lightbulb = (props: SvgProps) => {
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
        d="M8.25281 21.2977C8.25328 21.5925 8.34047 21.8812 8.50406 22.1269L9.30516 23.3311C9.44201 23.5369 9.62762 23.7058 9.84549 23.8226C10.0634 23.9393 10.3067 24.0005 10.5539 24.0005H13.4466C13.6938 24.0005 13.9371 23.9393 14.155 23.8226C14.3728 23.7058 14.5585 23.5369 14.6953 23.3311L15.4964 22.1269C15.6599 21.8812 15.7473 21.5928 15.7477 21.2977L15.7495 19.5H8.25047L8.25281 21.2977ZM3.75 8.25C3.75 10.3298 4.52109 12.2273 5.79188 13.6772C6.56625 14.5608 7.7775 16.4067 8.23922 17.9639C8.24109 17.9761 8.2425 17.9883 8.24437 18.0005H15.7556C15.7575 17.9883 15.7589 17.9766 15.7608 17.9639C16.2225 16.4067 17.4338 14.5608 18.2081 13.6772C19.4789 12.2273 20.25 10.3298 20.25 8.25C20.25 3.68484 16.5427 -0.0140645 11.9742 -1.99708e-06C7.1925 0.0145293 3.75 3.88922 3.75 8.25ZM12 4.5C9.93234 4.5 8.25 6.18234 8.25 8.25C8.25 8.66437 7.91437 9 7.5 9C7.08562 9 6.75 8.66437 6.75 8.25C6.75 5.355 9.105 3 12 3C12.4144 3 12.75 3.33562 12.75 3.75C12.75 4.16437 12.4144 4.5 12 4.5Z"
        fill={fill}
      />
    </Svg>
  )
}

Lightbulb.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Lightbulb)
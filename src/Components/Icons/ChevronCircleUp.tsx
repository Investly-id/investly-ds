import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronCircleUp = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12ZM11.2031 6.66094L4.85156 13.0125C4.41094 13.4531 4.41094 14.1656 4.85156 14.6016L5.64844 15.3984C6.08906 15.8391 6.80156 15.8391 7.2375 15.3984L12 10.6359L16.7625 15.3984C17.2031 15.8391 17.9156 15.8391 18.3516 15.3984L19.1484 14.6016C19.5891 14.1609 19.5891 13.4484 19.1484 13.0125L12.7969 6.66094C12.3562 6.22031 11.6438 6.22031 11.2031 6.66094Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronCircleUp.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronCircleUp)

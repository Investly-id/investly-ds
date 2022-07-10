import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronCircleLeft = (props: SvgProps) => {
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
        d="M12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625ZM6.66094 12.7969L13.0125 19.1484C13.4531 19.5891 14.1656 19.5891 14.6016 19.1484L15.3984 18.3516C15.8391 17.9109 15.8391 17.1984 15.3984 16.7625L10.6359 12L15.3984 7.2375C15.8391 6.79687 15.8391 6.08437 15.3984 5.64844L14.6016 4.85156C14.1609 4.41094 13.4484 4.41094 13.0125 4.85156L6.66094 11.2031C6.22031 11.6438 6.22031 12.3562 6.66094 12.7969Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronCircleLeft.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronCircleLeft)

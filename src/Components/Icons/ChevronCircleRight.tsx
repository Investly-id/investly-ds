import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronCircleRight = (props: SvgProps) => {
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
        d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM17.3391 11.2031L10.9875 4.85156C10.5469 4.41094 9.83438 4.41094 9.39844 4.85156L8.60156 5.64844C8.16094 6.08906 8.16094 6.80156 8.60156 7.2375L13.3641 12L8.60156 16.7625C8.16094 17.2031 8.16094 17.9156 8.60156 18.3516L9.39844 19.1484C9.83906 19.5891 10.5516 19.5891 10.9875 19.1484L17.3391 12.7969C17.7797 12.3562 17.7797 11.6438 17.3391 11.2031Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronCircleRight.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronCircleRight)

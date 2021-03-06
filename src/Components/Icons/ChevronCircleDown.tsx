import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronCircleDown = (props: SvgProps) => {
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
        d="M23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12ZM12.7969 17.3391L19.1484 10.9875C19.5891 10.5469 19.5891 9.83438 19.1484 9.39844L18.3516 8.60156C17.9109 8.16094 17.1984 8.16094 16.7625 8.60156L12 13.3641L7.2375 8.60156C6.79687 8.16094 6.08437 8.16094 5.64844 8.60156L4.85156 9.39844C4.41094 9.83906 4.41094 10.5516 4.85156 10.9875L11.2031 17.3391C11.6438 17.7797 12.3562 17.7797 12.7969 17.3391Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronCircleDown.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChevronCircleDown)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowCircleLeft = (props: SvgProps) => {
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
        d="M12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625ZM13.3547 16.8937L9.81562 13.5H18.375C18.9984 13.5 19.5 12.9984 19.5 12.375V11.625C19.5 11.0016 18.9984 10.5 18.375 10.5H9.81562L13.3547 7.10625C13.8094 6.67031 13.8187 5.94375 13.3734 5.49844L12.8578 4.9875C12.4172 4.54688 11.7047 4.54688 11.2687 4.9875L5.04844 11.2031C4.60781 11.6438 4.60781 12.3562 5.04844 12.7922L11.2687 19.0125C11.7094 19.4531 12.4219 19.4531 12.8578 19.0125L13.3734 18.5016C13.8187 18.0563 13.8094 17.3297 13.3547 16.8937Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowCircleLeft.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowCircleLeft)

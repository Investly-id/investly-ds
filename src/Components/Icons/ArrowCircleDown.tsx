import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowCircleDown = (props: SvgProps) => {
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
        d="M23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12ZM16.8937 10.6453L13.5 14.1844V5.625C13.5 5.00156 12.9984 4.5 12.375 4.5H11.625C11.0016 4.5 10.5 5.00156 10.5 5.625V14.1844L7.10625 10.6453C6.67031 10.1906 5.94375 10.1812 5.49844 10.6266L4.9875 11.1422C4.54688 11.5828 4.54688 12.2953 4.9875 12.7313L11.2031 18.9516C11.6438 19.3922 12.3562 19.3922 12.7922 18.9516L19.0125 12.7313C19.4531 12.2906 19.4531 11.5781 19.0125 11.1422L18.5016 10.6266C18.0563 10.1812 17.3297 10.1906 16.8937 10.6453Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowCircleDown.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowCircleDown)

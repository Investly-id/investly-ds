import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Camera = (props: SvgProps) => {
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
        d="M24 6.75V20.25C24 21.4922 22.9922 22.5 21.75 22.5H2.25C1.00781 22.5 0 21.4922 0 20.25V6.75C0 5.50781 1.00781 4.5 2.25 4.5H6.375L6.95156 2.95781C7.27969 2.08125 8.11875 1.5 9.05625 1.5H14.9391C15.8766 1.5 16.7156 2.08125 17.0438 2.95781L17.625 4.5H21.75C22.9922 4.5 24 5.50781 24 6.75ZM17.625 13.5C17.625 10.3969 15.1031 7.875 12 7.875C8.89688 7.875 6.375 10.3969 6.375 13.5C6.375 16.6031 8.89688 19.125 12 19.125C15.1031 19.125 17.625 16.6031 17.625 13.5ZM16.125 13.5C16.125 15.7734 14.2734 17.625 12 17.625C9.72656 17.625 7.875 15.7734 7.875 13.5C7.875 11.2266 9.72656 9.375 12 9.375C14.2734 9.375 16.125 11.2266 16.125 13.5Z"
        fill={fill}
      />
    </Svg>
  )
}

Camera.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Camera)

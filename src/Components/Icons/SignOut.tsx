import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SignOut = (props: SvgProps) => {
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
        d="M23.2969 12.7969L15.4219 20.6719C14.7188 21.375 13.5 20.8828 13.5 19.875V15.375H7.125C6.50156 15.375 6 14.8734 6 14.25V9.75001C6 9.12657 6.50156 8.62501 7.125 8.62501H13.5V4.12501C13.5 3.12188 14.7141 2.62501 15.4219 3.32813L23.2969 11.2031C23.7328 11.6438 23.7328 12.3563 23.2969 12.7969ZM9 20.4375V18.5625C9 18.2531 8.74687 18 8.4375 18H4.5C3.67031 18 3 17.3297 3 16.5V7.50001C3 6.67032 3.67031 6.00001 4.5 6.00001H8.4375C8.74687 6.00001 9 5.74688 9 5.43751V3.56251C9 3.25313 8.74687 3.00001 8.4375 3.00001H4.5C2.01562 3.00001 0 5.01563 0 7.50001V16.5C0 18.9844 2.01562 21 4.5 21H8.4375C8.74687 21 9 20.7469 9 20.4375Z"
        fill={fill}
      />
    </Svg>
  )
}

SignOut.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(SignOut)

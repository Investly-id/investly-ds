import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SignIn = (props: SvgProps) => {
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
        d="M19.5 21H15.5625C15.2531 21 15 20.7469 15 20.4375V18.5625C15 18.2531 15.2531 18 15.5625 18H19.5C20.3297 18 21 17.3297 21 16.5V7.5C21 6.67031 20.3297 6 19.5 6H15.5625C15.2531 6 15 5.74688 15 5.4375V3.5625C15 3.25313 15.2531 3 15.5625 3H19.5C21.9844 3 24 5.01562 24 7.5V16.5C24 18.9844 21.9844 21 19.5 21ZM17.2969 11.5781L9.42188 3.70312C8.71875 3 7.5 3.49219 7.5 4.5V9H1.125C0.501562 9 0 9.50156 0 10.125V14.625C0 15.2484 0.501562 15.75 1.125 15.75H7.5V20.25C7.5 21.2578 8.71875 21.75 9.42188 21.0469L17.2969 13.1719C17.7328 12.7312 17.7328 12.0188 17.2969 11.5781Z"
        fill={fill}
      />
    </Svg>
  )
}

SignIn.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(SignIn)

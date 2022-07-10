import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChatBubble = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 18.75"
      fill="none"
      {...props}
    >
      <Path
        d="M9.96094 0.625C4.46836 0.625 0 4.5675 0 9.41406C0 11.4614 0.810234 13.4452 2.2848 15.0177C2.57664 16.221 2.22242 17.4959 1.34352 18.3748C0.976016 18.7423 1.2359 19.375 1.75781 19.375C3.4275 19.375 5.03711 18.721 6.23301 17.5674C7.41633 17.9897 8.66832 18.2031 9.96094 18.2031C15.4535 18.2031 20 14.2606 20 9.41406C20 4.5675 15.4535 0.625 9.96094 0.625ZM5.35156 11.1719C4.38227 11.1719 3.59375 10.3834 3.59375 9.41406C3.59375 8.44477 4.38227 7.65625 5.35156 7.65625C6.32086 7.65625 7.10938 8.44477 7.10938 9.41406C7.10938 10.3834 6.32086 11.1719 5.35156 11.1719ZM10.0391 11.1719C9.06977 11.1719 8.28125 10.3834 8.28125 9.41406C8.28125 8.44477 9.06977 7.65625 10.0391 7.65625C11.0084 7.65625 11.7969 8.44477 11.7969 9.41406C11.7969 10.3834 11.0084 11.1719 10.0391 11.1719ZM14.7266 11.1719C13.7573 11.1719 12.9688 10.3834 12.9688 9.41406C12.9688 8.44477 13.7573 7.65625 14.7266 7.65625C15.6959 7.65625 16.4844 8.44477 16.4844 9.41406C16.4844 10.3834 15.6959 11.1719 14.7266 11.1719Z"
        fill={fill}
      />
    </Svg>
  )
}

ChatBubble.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ChatBubble)

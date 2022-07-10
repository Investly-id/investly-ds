import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Save = (props: SvgProps) => {
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
        d="M21.841 6.09098L17.909 2.15902C17.4871 1.73706 16.9148 1.5 16.318 1.5H3.75C2.50734 1.5 1.5 2.50734 1.5 3.75V20.25C1.5 21.4927 2.50734 22.5 3.75 22.5H20.25C21.4927 22.5 22.5 21.4927 22.5 20.25V7.68197C22.5 7.08523 22.2629 6.51294 21.841 6.09098ZM12 19.5C10.3432 19.5 9 18.1568 9 16.5C9 14.8432 10.3432 13.5 12 13.5C13.6568 13.5 15 14.8432 15 16.5C15 18.1568 13.6568 19.5 12 19.5ZM16.5 5.22563V9.9375C16.5 10.2481 16.2481 10.5 15.9375 10.5H5.0625C4.75186 10.5 4.5 10.2481 4.5 9.9375V5.0625C4.5 4.75186 4.75186 4.5 5.0625 4.5H15.7744C15.9236 4.5 16.0666 4.55925 16.1721 4.66477L16.3352 4.82789C16.3875 4.88012 16.4289 4.94212 16.4572 5.01037C16.4855 5.07861 16.5 5.15176 16.5 5.22563Z"
        fill={fill}
      />
    </Svg>
  )
}

Save.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Save)
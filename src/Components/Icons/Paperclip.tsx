import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Paperclip = (props: SvgProps) => {
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
        d="M3.52715 21.8504C0.78824 19.0244 0.839286 14.4671 3.59211 11.6513L13.4246 1.59375C15.5019 -0.531187 18.8786 -0.531374 20.9561 1.59375C23.0134 3.69816 23.0159 7.09355 20.9561 9.20044L12.385 17.9591C10.9856 19.3905 8.6991 19.3706 7.32336 17.9123C5.99797 16.5075 6.04049 14.2808 7.39143 12.8989L14.1294 6.01603C14.4192 5.72006 14.894 5.715 15.19 6.00473L16.2616 7.05375C16.5576 7.34353 16.5626 7.81838 16.2729 8.11434L9.53563 14.9966C9.30444 15.2331 9.29019 15.626 9.50525 15.854C9.71019 16.0712 10.0324 16.0748 10.2406 15.8617L18.8117 7.10311C19.731 6.1627 19.731 4.63163 18.8112 3.6907C17.9117 2.77069 16.4694 2.77022 15.5696 3.6907L5.73702 13.7482C4.10751 15.4151 4.08238 18.1132 5.68119 19.7629C7.27541 21.4079 9.85236 21.4099 11.4495 19.7763L19.5148 11.5263C19.8044 11.2301 20.2792 11.2248 20.5754 11.5143L21.6478 12.5626C21.944 12.8522 21.9494 13.327 21.6598 13.6232L13.5945 21.8731C10.8019 24.7296 6.28466 24.6958 3.52715 21.8504Z"
        fill={fill}
      />
    </Svg>
  )
}

Paperclip.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Paperclip)

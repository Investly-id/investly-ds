import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowCircleRight = (props: SvgProps) => {
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
        d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM10.6453 7.10625L14.1844 10.5H5.625C5.00156 10.5 4.5 11.0016 4.5 11.625V12.375C4.5 12.9984 5.00156 13.5 5.625 13.5H14.1844L10.6453 16.8937C10.1906 17.3297 10.1812 18.0563 10.6266 18.5016L11.1422 19.0125C11.5828 19.4531 12.2953 19.4531 12.7313 19.0125L18.9516 12.7969C19.3922 12.3562 19.3922 11.6438 18.9516 11.2078L12.7313 4.98281C12.2906 4.54219 11.5781 4.54219 11.1422 4.98281L10.6266 5.49375C10.1812 5.94375 10.1906 6.67031 10.6453 7.10625Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowCircleRight.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ArrowCircleRight)

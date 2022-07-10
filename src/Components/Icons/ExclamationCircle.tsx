import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ExclamationCircle = (props: SvgProps) => {
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
        d="M23.625 12C23.625 18.4217 18.4199 23.625 12 23.625C5.58014 23.625 0.375 18.4217 0.375 12C0.375 5.58202 5.58014 0.375 12 0.375C18.4199 0.375 23.625 5.58202 23.625 12ZM12 14.3438C10.8091 14.3438 9.84375 15.3091 9.84375 16.5C9.84375 17.6909 10.8091 18.6562 12 18.6562C13.1909 18.6562 14.1562 17.6909 14.1562 16.5C14.1562 15.3091 13.1909 14.3438 12 14.3438ZM9.95283 6.59316L10.3005 12.9682C10.3168 13.2665 10.5635 13.5 10.8622 13.5H13.1378C13.4365 13.5 13.6832 13.2665 13.6995 12.9682L14.0472 6.59316C14.0648 6.27094 13.8082 6 13.4855 6H10.5144C10.1917 6 9.93525 6.27094 9.95283 6.59316Z"
        fill={fill}
      />
    </Svg>
  )
}

ExclamationCircle.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ExclamationCircle)

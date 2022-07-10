import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Walking = (props: SvgProps) => {
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
        d="M14.25 4.5C15.4922 4.5 16.5 3.49219 16.5 2.25C16.5 1.00781 15.4922 0 14.25 0C13.0078 0 12 1.00781 12 2.25C12 3.49219 13.0078 4.5 14.25 4.5ZM18.6797 11.4891L17.5875 10.9359L17.1328 9.55781C16.4437 7.46719 14.5219 6.00469 12.3422 6C10.6547 5.99531 9.72186 6.47344 7.96874 7.18125C6.95624 7.58906 6.12655 8.3625 5.63905 9.34687L5.32499 9.98438C4.95936 10.725 5.25468 11.625 5.99061 11.9953C6.72186 12.3656 7.61249 12.0656 7.9828 11.325L8.29686 10.6875C8.46092 10.3594 8.7328 10.1016 9.0703 9.96563L10.3266 9.45938L9.61405 12.3047C9.3703 13.2797 9.6328 14.3156 10.3125 15.0609L13.1203 18.1266C13.4578 18.4969 13.6969 18.9422 13.8187 19.425L14.6765 22.8609C14.8781 23.6625 15.6937 24.1547 16.4953 23.9531C17.2969 23.7516 17.7891 22.9359 17.5875 22.1344L16.5469 17.9625C16.425 17.4797 16.1859 17.0297 15.8484 16.6641L13.7156 14.3344L14.5219 11.1141L14.7797 11.8875C15.0281 12.6422 15.5625 13.2656 16.2656 13.6219L17.3578 14.175C18.089 14.5453 18.9797 14.2453 19.35 13.5047C19.7109 12.7688 19.4156 11.8594 18.6797 11.4891ZM7.94999 18.0844C7.79999 18.4641 7.57499 18.8062 7.28436 19.0922L4.94061 21.4406C4.35468 22.0266 4.35468 22.9781 4.94061 23.5641C5.52655 24.15 6.47343 24.15 7.05936 23.5641L9.84374 20.7797C10.1297 20.4937 10.3547 20.1516 10.5094 19.7719L11.1422 18.1875C8.54999 15.3609 9.32811 16.2281 8.9203 15.6703L7.94999 18.0844Z"
        fill={fill}
      />
    </Svg>
  )
}

Walking.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Walking)

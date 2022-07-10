import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const BookMedical = (props: SvgProps) => {
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
        d="M22.5 16.8V1.2C22.5 0.45 22.05 0 21.3 0H6C3.45 0 1.5 1.95 1.5 4.5V19.5C1.5 22.05 3.45 24 6 24H21.3C21.9 24 22.5 23.55 22.5 22.8V22.05C22.5 21.75 22.35 21.45 22.05 21.15C21.9 20.4 21.9 18.3 22.05 17.7C22.35 17.55 22.5 17.25 22.5 16.8ZM8.25 7.875C8.25 7.77554 8.28951 7.68016 8.35983 7.60983C8.43016 7.53951 8.52554 7.5 8.625 7.5H11.25V4.875C11.25 4.77554 11.2895 4.68016 11.3598 4.60984C11.4302 4.53951 11.5255 4.5 11.625 4.5H13.875C13.9745 4.5 14.0698 4.53951 14.1402 4.60984C14.2105 4.68016 14.25 4.77554 14.25 4.875V7.5H16.875C16.9745 7.5 17.0698 7.53951 17.1402 7.60983C17.2105 7.68016 17.25 7.77554 17.25 7.875V10.125C17.25 10.2245 17.2105 10.3198 17.1402 10.3902C17.0698 10.4605 16.9745 10.5 16.875 10.5H14.25V13.125C14.25 13.2245 14.2105 13.3198 14.1402 13.3902C14.0698 13.4605 13.9745 13.5 13.875 13.5H11.625C11.5255 13.5 11.4302 13.4605 11.3598 13.3902C11.2895 13.3198 11.25 13.2245 11.25 13.125V10.5H8.625C8.52554 10.5 8.43016 10.4605 8.35983 10.3902C8.28951 10.3198 8.25 10.2245 8.25 10.125V7.875ZM19.35 21H6C5.1 21 4.5 20.4 4.5 19.5C4.5 18.6 5.25 18 6 18H19.35V21Z"
        fill={fill}
      />
    </Svg>
  )
}

BookMedical.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(BookMedical)

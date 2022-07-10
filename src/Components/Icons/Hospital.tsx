import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Hospital = (props: SvgProps) => {
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
        d="M22.5 23.0625V24H1.5V23.0625C1.5 22.7519 1.75186 22.5 2.0625 22.5H3V5.625C3 5.00367 3.50367 4.5 4.125 4.5H8.25V1.125C8.25 0.503672 8.75367 0 9.375 0H14.625C15.2463 0 15.75 0.503672 15.75 1.125V4.5H19.875C20.4963 4.5 21 5.00367 21 5.625V22.5H21.9375C22.2481 22.5 22.5 22.7519 22.5 23.0625ZM15.9375 9H14.0625C13.7519 9 13.5 9.25186 13.5 9.5625V11.4375C13.5 11.7481 13.7519 12 14.0625 12H15.9375C16.2481 12 16.5 11.7481 16.5 11.4375V9.5625C16.5 9.25186 16.2481 9 15.9375 9ZM8.0625 12H9.9375C10.2481 12 10.5 11.7481 10.5 11.4375V9.5625C10.5 9.25186 10.2481 9 9.9375 9H8.0625C7.75186 9 7.5 9.25186 7.5 9.5625V11.4375C7.5 11.7481 7.75186 12 8.0625 12ZM12.9375 18H11.0625C10.7519 18 10.5 18.2519 10.5 18.5625V22.5H13.5V18.5625C13.5 18.2519 13.2481 18 12.9375 18ZM15.9375 13.5H14.0625C13.7519 13.5 13.5 13.7519 13.5 14.0625V15.9375C13.5 16.2481 13.7519 16.5 14.0625 16.5H15.9375C16.2481 16.5 16.5 16.2481 16.5 15.9375V14.0625C16.5 13.7519 16.2481 13.5 15.9375 13.5ZM10.5 14.0625C10.5 13.7519 10.2481 13.5 9.9375 13.5H8.0625C7.75186 13.5 7.5 13.7519 7.5 14.0625V15.9375C7.5 16.2481 7.75186 16.5 8.0625 16.5H9.9375C10.2481 16.5 10.5 16.2481 10.5 15.9375V14.0625ZM10.0312 4.5H11.25V5.71875C11.25 5.79334 11.2796 5.86488 11.3324 5.91762C11.3851 5.97037 11.4567 6 11.5312 6H12.4688C12.5433 6 12.6149 5.97037 12.6676 5.91762C12.7204 5.86488 12.75 5.79334 12.75 5.71875V4.5H13.9688C14.0433 4.5 14.1149 4.47037 14.1676 4.41762C14.2204 4.36488 14.25 4.29334 14.25 4.21875V3.28125C14.25 3.20666 14.2204 3.13512 14.1676 3.08238C14.1149 3.02963 14.0433 3 13.9688 3H12.75V1.78125C12.75 1.70666 12.7204 1.63512 12.6676 1.58238C12.6149 1.52963 12.5433 1.5 12.4688 1.5H11.5312C11.4567 1.5 11.3851 1.52963 11.3324 1.58238C11.2796 1.63512 11.25 1.70666 11.25 1.78125V3H10.0312C9.95666 3 9.88512 3.02963 9.83238 3.08238C9.77963 3.13512 9.75 3.20666 9.75 3.28125V4.21875C9.75 4.29334 9.77963 4.36488 9.83238 4.41762C9.88512 4.47037 9.95666 4.5 10.0312 4.5Z"
        fill={fill}
      />
    </Svg>
  )
}

Hospital.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Hospital)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Running = (props: SvgProps) => {
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
        d="M15 4.5C16.2427 4.5 17.25 3.49266 17.25 2.25C17.25 1.00734 16.2427 0 15 0C13.7573 0 12.75 1.00734 12.75 2.25C12.75 3.49266 13.7573 4.5 15 4.5ZM7.57922 14.8814L6.88547 16.4995H3.75C2.92172 16.4995 2.25 17.1712 2.25 17.9995C2.25 18.8278 2.92172 19.4995 3.75 19.4995H7.38047C8.28281 19.4995 9.09516 18.9633 9.44812 18.1359L9.86016 17.1741L9.36 16.8787C8.54812 16.3992 7.95094 15.6895 7.57922 14.8814ZM20.25 10.4995H18.1861L16.9645 8.00344C16.3786 6.80578 15.3028 5.93016 14.0686 5.61563L10.7367 4.62469C9.41016 4.30594 8.02875 4.59891 6.94734 5.42813L5.08781 6.85359C4.43016 7.3575 4.30547 8.29875 4.81031 8.95641C5.31516 9.61406 6.25594 9.73734 6.91313 9.23391L8.77359 7.80844C9.13312 7.53234 9.59109 7.43344 9.95813 7.52063L10.6472 7.72547L8.89125 11.8219C8.29969 13.2037 8.82984 14.8223 10.1241 15.5864L14.1075 17.9381L12.8198 22.0505C12.5723 22.8408 13.0125 23.6822 13.8028 23.9297C13.9523 23.9766 14.1033 23.9991 14.2519 23.9991C14.8898 23.9991 15.4814 23.588 15.6825 22.9467L17.1656 18.2095C17.4427 17.2359 17.0302 16.1902 16.1512 15.66L13.2806 13.9659L14.7483 10.2966L15.6984 12.2386C16.0734 13.0045 16.8666 13.4991 17.7192 13.4991H20.25C21.0783 13.4991 21.75 12.8273 21.75 11.9991C21.75 11.1708 21.0783 10.4995 20.25 10.4995Z"
        fill={fill}
      />
    </Svg>
  )
}

Running.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Running)

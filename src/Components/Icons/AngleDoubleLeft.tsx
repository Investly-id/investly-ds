import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const AngleDoubleLeft = (props: SvgProps) => {
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
        d="M11.986 11.2031L18.361 4.82812C18.8016 4.38749 19.5141 4.38749 19.95 4.82812L21.0094 5.88749C21.45 6.32812 21.45 7.04062 21.0094 7.47656L16.4953 12L21.0141 16.5187C21.4547 16.9594 21.4547 17.6719 21.0141 18.1078L19.9547 19.1719C19.5141 19.6125 18.8016 19.6125 18.3656 19.1719L11.9906 12.7969C11.5453 12.3562 11.5453 11.6437 11.986 11.2031ZM2.98595 12.7969L9.36095 19.1719C9.80158 19.6125 10.5141 19.6125 10.95 19.1719L12.0094 18.1125C12.45 17.6719 12.45 16.9594 12.0094 16.5234L7.49533 12L12.0141 7.48124C12.4547 7.04062 12.4547 6.32812 12.0141 5.89218L10.9547 4.82812C10.5141 4.38749 9.80158 4.38749 9.36564 4.82812L2.99064 11.2031C2.54533 11.6437 2.54533 12.3562 2.98595 12.7969Z"
        fill={fill}
      />
    </Svg>
  )
}

AngleDoubleLeft.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(AngleDoubleLeft)

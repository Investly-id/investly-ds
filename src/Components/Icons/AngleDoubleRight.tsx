import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const AngleDoubleRight = (props: SvgProps) => {
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
        d="M12.0141 12.7969L5.63906 19.1719C5.19844 19.6125 4.48594 19.6125 4.05 19.1719L2.99062 18.1125C2.55 17.6719 2.55 16.9594 2.99062 16.5234L7.50937 12.0047L2.99062 7.48593C2.55 7.04531 2.55 6.33281 2.99062 5.89687L4.04531 4.82812C4.48594 4.38749 5.19844 4.38749 5.63437 4.82812L12.0094 11.2031C12.4547 11.6437 12.4547 12.3562 12.0141 12.7969ZM21.0141 11.2031L14.6391 4.82812C14.1984 4.38749 13.4859 4.38749 13.05 4.82812L11.9906 5.88749C11.55 6.32812 11.55 7.04062 11.9906 7.47656L16.5094 11.9953L11.9906 16.5141C11.55 16.9547 11.55 17.6672 11.9906 18.1031L13.05 19.1625C13.4906 19.6031 14.2031 19.6031 14.6391 19.1625L21.0141 12.7875C21.4547 12.3562 21.4547 11.6437 21.0141 11.2031Z"
        fill={fill}
      />
    </Svg>
  )
}

AngleDoubleRight.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(AngleDoubleRight)

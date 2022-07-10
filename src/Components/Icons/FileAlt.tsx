import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const FileAlt = (props: SvgProps) => {
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
        d="M13.5 6.375V0H4.125C3.50156 0 3 0.501562 3 1.125V22.875C3 23.4984 3.50156 24 4.125 24H19.875C20.4984 24 21 23.4984 21 22.875V7.5H14.625C14.0063 7.5 13.5 6.99375 13.5 6.375ZM16.5 17.4375C16.5 17.7469 16.2469 18 15.9375 18H8.0625C7.75313 18 7.5 17.7469 7.5 17.4375V17.0625C7.5 16.7531 7.75313 16.5 8.0625 16.5H15.9375C16.2469 16.5 16.5 16.7531 16.5 17.0625V17.4375ZM16.5 14.4375C16.5 14.7469 16.2469 15 15.9375 15H8.0625C7.75313 15 7.5 14.7469 7.5 14.4375V14.0625C7.5 13.7531 7.75313 13.5 8.0625 13.5H15.9375C16.2469 13.5 16.5 13.7531 16.5 14.0625V14.4375ZM16.5 11.0625V11.4375C16.5 11.7469 16.2469 12 15.9375 12H8.0625C7.75313 12 7.5 11.7469 7.5 11.4375V11.0625C7.5 10.7531 7.75313 10.5 8.0625 10.5H15.9375C16.2469 10.5 16.5 10.7531 16.5 11.0625ZM21 5.71406V6H15V0H15.2859C15.5859 0 15.8719 0.117188 16.0828 0.328125L20.6719 4.92188C20.8828 5.13281 21 5.41875 21 5.71406Z"
        fill={fill}
      />
    </Svg>
  )
}

FileAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(FileAlt)
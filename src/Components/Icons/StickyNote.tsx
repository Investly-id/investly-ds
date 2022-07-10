import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const StickyNote = (props: SvgProps) => {
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
        d="M16.125 15H22.5V2.625C22.5 2.00156 21.9984 1.5 21.375 1.5H2.625C2.00156 1.5 1.5 2.00156 1.5 2.625V21.375C1.5 21.9984 2.00156 22.5 2.625 22.5H15V16.125C15 15.5063 15.5063 15 16.125 15ZM22.1719 17.5781L17.5781 22.1719C17.3672 22.3828 17.0813 22.5 16.7812 22.5H16.5V16.5H22.5V16.7859C22.5 17.0813 22.3828 17.3672 22.1719 17.5781Z"
        fill={fill}
      />
    </Svg>
  )
}

StickyNote.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(StickyNote)

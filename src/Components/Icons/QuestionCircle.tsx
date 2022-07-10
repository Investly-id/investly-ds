import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const QuestionCircle = (props: SvgProps) => {
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
        d="M23.625 12c0 6.422-5.205 11.625-11.625 11.625S.375 18.422.375 12C.375 5.582 5.58.375 12 .375S23.625 5.582 23.625 12zM12.312 4.219c-2.555 0-4.184 1.076-5.463 2.988a.563.563 0 00.127.763l1.626 1.233a.562.562 0 00.782-.1c.837-1.062 1.411-1.678 2.686-1.678.957 0 2.142.617 2.142 1.545 0 .702-.58 1.063-1.525 1.593-1.103.618-2.562 1.387-2.562 3.312v.188c0 .31.252.562.563.562h2.624c.311 0 .563-.252.563-.563V14c0-1.334 3.9-1.39 3.9-5 0-2.719-2.82-4.781-5.463-4.781zM12 15.844A2.159 2.159 0 009.844 18c0 1.189.967 2.156 2.156 2.156A2.159 2.159 0 0014.156 18 2.159 2.159 0 0012 15.844z"
        fill={fill}
      />
    </Svg>
  )
}

QuestionCircle.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(QuestionCircle)

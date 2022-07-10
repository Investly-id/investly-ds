import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ShareAlt = (props: SvgProps) => {
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
        d="M18 15C16.9403 15 15.9662 15.3665 15.1973 15.9795L10.3933 12.9769C10.5356 12.3334 10.5356 11.6666 10.3933 11.023L15.1973 8.0205C15.9662 8.63348 16.9403 9 18 9C20.4853 9 22.5 6.98527 22.5 4.5C22.5 2.01473 20.4853 0 18 0C15.5147 0 13.5 2.01473 13.5 4.5C13.5 4.83553 13.537 5.16234 13.6067 5.47692L8.80266 8.47945C8.03377 7.86652 7.05975 7.5 6 7.5C3.51473 7.5 1.5 9.51473 1.5 12C1.5 14.4853 3.51473 16.5 6 16.5C7.05975 16.5 8.03377 16.1335 8.80266 15.5205L13.6067 18.5231C13.5357 18.8439 13.4999 19.1714 13.5 19.5C13.5 21.9853 15.5147 24 18 24C20.4853 24 22.5 21.9853 22.5 19.5C22.5 17.0147 20.4853 15 18 15Z"
        fill={fill}
      />
    </Svg>
  )
}

ShareAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(ShareAlt)

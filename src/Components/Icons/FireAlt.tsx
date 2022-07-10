import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const FireAlt = (props: SvgProps) => {
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
        d="M16.6669 2.4C15.6919 3.30469 14.8116 4.25578 14.0316 5.21109C12.7537 3.45094 11.1694 1.66547 9.375 0C4.76906 4.27359 1.5 9.84188 1.5 13.2C1.5 19.1648 6.20109 24 12 24C17.7989 24 22.5 19.1648 22.5 13.2C22.5 10.703 20.0634 5.55281 16.6669 2.4ZM15.7542 18.368C14.7389 19.0786 13.4869 19.5 12.1341 19.5C8.75203 19.5 6 17.2622 6 13.6289C6 11.8191 7.13953 10.2244 9.41203 7.5C9.73687 7.87406 14.0447 13.3753 14.0447 13.3753L16.793 10.2403C16.987 10.5614 17.1637 10.8755 17.3212 11.1764C18.6033 13.6228 18.0623 16.7531 15.7542 18.368Z"
        fill={fill}
      />
    </Svg>
  )
}

FireAlt.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(FireAlt)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Wallet = (props: SvgProps) => {
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
        d="M21.6188 6H3.75C3.33562 6 3 5.66437 3 5.25C3 4.83562 3.33562 4.5 3.75 4.5H21.75C22.1644 4.5 22.5 4.16438 22.5 3.75C22.5 2.50734 21.4927 1.5 20.25 1.5H3C1.34297 1.5 0 2.84297 0 4.5V19.5C0 21.157 1.34297 22.5 3 22.5H21.6188C22.9322 22.5 24 21.4908 24 20.25V8.25C24 7.00922 22.9322 6 21.6188 6ZM19.5 15.75C18.6717 15.75 18 15.0783 18 14.25C18 13.4217 18.6717 12.75 19.5 12.75C20.3283 12.75 21 13.4217 21 14.25C21 15.0783 20.3283 15.75 19.5 15.75Z"
        fill={fill}
      />
    </Svg>
  )
}

Wallet.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Wallet)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const BellSlash = (props: SvgProps) => {
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
        d="M23.768 19.579l-3.398-2.627c.007-.052.03-.1.03-.152a1.17 1.17 0 00-.323-.815c-.724-.778-2.08-1.95-2.08-5.785 0-2.914-2.043-5.247-4.798-5.819V3.6a1.2 1.2 0 10-2.398 0v.781a6.024 6.024 0 00-3.66 2.347L1.705 2.526a.6.6 0 00-.842.106l-.737.947a.6.6 0 00.106.842l22.063 17.053a.6.6 0 00.842-.106l.737-.947a.6.6 0 00-.106-.842zM5.896 11.833c-.323 2.548-1.365 3.5-1.973 4.153a1.171 1.171 0 00-.323.814c.004.615.487 1.2 1.204 1.2h9.072l-7.98-6.167zM12 21.6a2.4 2.4 0 002.399-2.4H9.6A2.4 2.4 0 0012 21.6z"
        fill={fill}
      />
    </Svg>
  )
}

BellSlash.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(BellSlash)

import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Home = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M19.4602 8.69904C19.4598 8.69858 19.4593 8.69812 19.4589 8.69766L11.3005 0.539551C10.9527 0.19165 10.4904 0 9.99858 0C9.50679 0 9.04445 0.191498 8.69655 0.539398L0.542402 8.69339C0.539655 8.69614 0.536909 8.69904 0.534162 8.70178C-0.179949 9.42001 -0.178729 10.5853 0.537672 11.3017C0.864973 11.6292 1.29725 11.8188 1.75944 11.8387C1.77821 11.8405 1.79713 11.8414 1.81621 11.8414H2.14137V17.8453C2.14137 19.0334 3.10801 20 4.29637 20H7.4882C7.81169 20 8.07414 19.7377 8.07414 19.4141V14.707C8.07414 14.1649 8.51512 13.7239 9.05726 13.7239H10.9399C11.482 13.7239 11.923 14.1649 11.923 14.707V19.4141C11.923 19.7377 12.1853 20 12.509 20H15.7008C16.8891 20 17.8558 19.0334 17.8558 17.8453V11.8414H18.1573C18.6489 11.8414 19.1113 11.6499 19.4593 11.302C20.1765 10.5844 20.1768 9.41711 19.4602 8.69904V8.69904Z"
        fill={fill}
      />
    </Svg>
  )
}

Home.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Home)
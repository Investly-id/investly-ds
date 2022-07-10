import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Redo = (props: SvgProps) => {
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
        d="M12.0213 0.375004C15.1277 0.380582 17.9481 1.60468 20.0303 3.59461L21.7045 1.92047C22.4132 1.21177 23.625 1.71371 23.625 2.71599V9C23.625 9.62133 23.1213 10.125 22.5 10.125H16.216C15.2137 10.125 14.7118 8.91324 15.4205 8.20449L17.3775 6.24746C15.9307 4.89282 14.0587 4.14244 12.0698 4.12528C7.73869 4.08788 4.08783 7.59296 4.12528 12.0679C4.16081 16.3129 7.60238 19.875 12 19.875C13.9278 19.875 15.7499 19.187 17.1857 17.9271C17.4081 17.732 17.7438 17.7439 17.953 17.953L19.8121 19.8121C20.0405 20.0405 20.0292 20.4128 19.7895 20.6293C17.7282 22.4912 14.9965 23.625 12 23.625C5.57972 23.625 0.375047 18.4203 0.375 12.0001C0.374953 5.58718 5.60841 0.363519 12.0213 0.375004Z"
        fill={fill}
      />
    </Svg>
  )
}

Redo.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Redo)
import tw from './tw'

const getTwStyle = (style?: string | any) => {
  if (!style) {
    return style
  }
  if (typeof style === 'string') {
    return tw.style(style)
  }
  return style
}

export default getTwStyle

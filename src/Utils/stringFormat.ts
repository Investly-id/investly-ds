import moment, { Moment } from 'moment'

const convertToRp = (
  value: string,
  withPrefix = true,
  emptyDot = false,
  rounding = false
) => {
  const valueNormalized = value

  if (!valueNormalized) {
    return withPrefix ? 'Rp. -' : '0'
  }
  let result = ''
  const valueArr = valueNormalized.toString().split('.')
  const valueFirst = valueArr[0].split('').reverse().join('')
  const valueSecond = valueArr[1]

  for (let i = 0; i < valueFirst.length; i++) {
    if (i % 3 === 0) {
      result += valueFirst.substr(i, 3) + '.'
    }
  }
  const resultFinal =
    (withPrefix ? 'Rp ' : '') +
    result
      .split('', result.length - 1)
      .reverse()
      .join('')

  if ((!emptyDot && !valueSecond) || rounding) {
    return resultFinal
  }
  if (emptyDot && !valueSecond && valueNormalized.includes('.')) {
    return resultFinal + ','
  }

  return (
    resultFinal +
    (valueSecond
      ? `.${Number(`0.${valueSecond}`)
          .toString()
          .replace('0.', '')
          .substring(0, 2)}`
      : '')
  )
}

const convertRpToNum = (value: string) => {
  let result = ''
  const valueNormalized = value
  const valueArr = valueNormalized.toString().split(',')
  const num = valueArr[0].split('.').join('')
  result = parseInt(num || '0', 10).toString()
  if (valueNormalized.includes(',')) {
    result += '.'
    if (valueArr[1]) {
      if (valueArr[1].includes(',')) {
        result += valueArr[1].replace(',', '')
      } else {
        result += valueArr[1]
      }
    }
  }
  return result
}

function simplifyNumber(value: number) {
  const offsets = [
    { key: 'T', offset: 1000 ** 4 },
    { key: 'M', offset: 1000 ** 3 },
    { key: 'Jt', offset: 1000 ** 2 },
    { key: 'Rb', offset: 1000 ** 1 },
  ]
  const unit = offsets.find(({ offset }) => value > offset)
  return `${parseInt(String(value / Number(unit?.offset ?? 1)), 10)}${
    unit?.key || ''
  }`
}

const simplifyMoney = (value: string) => {
  const valueNumber = Number(value)
  let valueFormatted = ''
  if (valueNumber >= 1000000000000) {
    valueFormatted = `${valueNumber / 1000000000000} T`
  } else if (valueNumber > 1000000000) {
    valueFormatted = `${valueNumber / 1000000000000} M`
  } else if (valueNumber >= 1000000) {
    valueFormatted = `${valueNumber / 1000000} Jt`
  } else if (valueNumber >= 10000) {
    valueFormatted = `${valueNumber / 1000} Rb`
  }
  return `Rp. ${valueFormatted}`
}

const numberToTime = (time: number) => {
  const date = new Date()
  date.setSeconds(time)
  const isoDate = date.toISOString().substr(11, 8)
  if (isoDate.substring(0, 2) === '00') {
    return isoDate.substring(3)
  }
  return isoDate
}

export const numberFormat = (text: string = '', withPrefix?: boolean) => {
  const [nom, koma] = text.split('.')
  return `${withPrefix ? 'Rp' : ''}${nom.replace(
    /(\d)(?=(\d\d\d)+$)/g,
    '$1.'
  )}${koma ? `,${koma?.substring(0, 2)}` : ''}`
}

export const kFormatter = (
  text: string | undefined,
  threshold: number = 999
) => {
  if (text === undefined) {
    return
  }

  let num = parseInt(text, 10)
  return Math.abs(num) > threshold
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'K'
    : numberFormat((Math.sign(num) * Math.abs(num)).toString())
}

export const getMoment = (date: string, format?: string): Moment =>
  moment(date || undefined, format)

export default {
  simplifyNumber,
  convertToRp,
  simplifyMoney,
  convertRpToNum,
  numberToTime,
  numberFormat,
  kFormatter,
  getMoment,
}

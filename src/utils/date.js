const MONTH_MAP = {
  1: 'JAN',
  2: 'FEB',
  3: 'MAR',
  4: 'APR',
  5: 'MAY',
  6: 'JUN',
  7: 'JUL',
  8: 'AUG',
  9: 'SEP',
  10: 'OCT',
  11: 'NOV',
  12: 'DEC',
}

export const format = dateValue => {
  if (dateValue == null) return ''

  const dateObject = dateValue instanceof Date ? dateValue : new Date(dateValue)

  if (`${dateObject}` === 'Invalid Date') return ''

  const [year, month, date, hour, min] = [
    dateObject.getFullYear(),
    dateObject.getMonth() + 1,
    dateObject.getDate(),
    `${dateObject.getHours()}`.padStart(2, '0'),
    `${dateObject.getMinutes()}`.padStart(2, '0'),
  ]

  return `${MONTH_MAP[month]}. ${date}. ${year} ${hour}:${min}`
}

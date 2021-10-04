import generateResultDataDayJs from './dayjs'
import generateResultDataDateFns from './date-fns'
import dumpResultData from './dump'

const now  = new Date()

console.log('*** DAYJS ***')
const dataDayJs = generateResultDataDayJs(now)
dumpResultData(dataDayJs)
console.log()

console.log('*** DATE-FNS ***')
const dataDateFns = generateResultDataDateFns(now)
dumpResultData(dataDateFns)
console.log()
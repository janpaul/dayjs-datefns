import { ResultData } from './types'

const renderBoolean = (value:boolean):string => value ? 'true' : 'false'
const dumpResultData = (data: ResultData) => {
  const {formatFn: format} = data
  console.log(`current date: ${format(data.now)}`)
  console.log(`one week ago: ${format(data.oneWeekAgo)}`)
  console.log(`two weeks from now: ${format(data.twoWeeksLater)}`)
  console.log(`is weekday: ${renderBoolean(data.isWeekDay)}`)
  console.log(`is weekend: ${renderBoolean(data.isWeekend)}`)
  console.log(`is today: ${renderBoolean(data.isToday)}`)
  console.log(`week of year: ${data.weekOfYear}`)
  console.log(`is in past: ${renderBoolean(data.isBeforeToday)}`)
  console.log(`next friday: ${format(data.nextFriday)}`)

}

export default dumpResultData
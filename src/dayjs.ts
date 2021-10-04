import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import {ResultData} from './types'

dayjs.extend(weekOfYear)
const SUNDAY = 0
const SATURDAY = 6

const generateResultData = (date:Date): ResultData=> {
  return {
    now: date,
    oneWeekAgo: dayjs(date).subtract(1, 'week').toDate(),
    twoWeeksLater: dayjs(date).add(2, 'week').toDate(),
    isWeekDay: ![SUNDAY, SATURDAY].includes(dayjs(date).day()),
    isWeekend: [SUNDAY, SATURDAY].includes(dayjs(date).day()),
    weekOfYear: dayjs(date).week(),
    isToday: dayjs(date).isSame(new Date(), 'day'),
    isBeforeToday: dayjs(date).isBefore(dayjs(new Date())),
    nextFriday: date, // not that easy :-(
    formatFn: (_date): string => dayjs(_date).format('DD-MM-YYYY'),
  }
}
export default generateResultData


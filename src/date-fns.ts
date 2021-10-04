import { ResultData } from './types'
import format from 'date-fns/format'
import add from 'date-fns/add'
import sub from 'date-fns/sub'
import isBefore from 'date-fns/isBefore'
import isEqual from 'date-fns/isEqual'
import isWeekend from 'date-fns/isWeekend'
import nextFriday from 'date-fns/nextFriday'
import getWeek from 'date-fns/getWeek'

const generateResultData = (date:Date): ResultData=> {
  return {
    now: date,
    oneWeekAgo: sub(date, {weeks: 1}),
    twoWeeksLater: add(date, {weeks: 2}),
    isWeekend: isWeekend(date),
    isWeekDay: !isWeekend(date),
    isToday: isEqual(date, new Date()),
    isBeforeToday: isBefore(date, new Date()),
    weekOfYear: getWeek(date),
    nextFriday: nextFriday(date),
    formatFn: (_date): string => format(_date,'dd-MM-yyyy'),
  }
}
export default generateResultData
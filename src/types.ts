export type ResultData = {
  now: Date
  oneWeekAgo: Date,
  twoWeeksLater: Date,
  nextFriday: Date,
  isWeekDay: boolean,
  isWeekend: boolean,
  weekOfYear: number,
  isToday: boolean,
  isBeforeToday: boolean,
  // eslint-disable-next-line no-unused-vars
  formatFn: (arg0: Date)=>string
}
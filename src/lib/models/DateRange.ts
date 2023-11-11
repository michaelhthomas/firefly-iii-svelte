import dayjs from 'dayjs';

import { DateFormat } from './DateFormat';

export interface DateRange {
	start: Date;
	end: Date;
}

export enum DateRangeChoice {
	Last365,
	Last90,
	Last30,
	Last7,
	YTD,
	QTD,
	MTD,
	Day,
	Week,
	Month,
	Quarter,
	HalfYear,
	FullYear
}

export function getDateRange(choice: DateRangeChoice): DateRange {
	switch (choice) {
		case DateRangeChoice.Last365:
			return {
				start: dayjs().subtract(365, 'days').startOf('day').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.Last90:
			return {
				start: dayjs().subtract(90, 'days').startOf('day').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.Last30:
			return {
				start: dayjs().subtract(30, 'days').startOf('day').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.Last7:
			return {
				start: dayjs().subtract(7, 'days').startOf('day').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.YTD:
			return {
				start: dayjs().startOf('year').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.QTD:
			return {
				start: dayjs().startOf('quarter').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.MTD:
			return {
				start: dayjs().startOf('month').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.Day:
			return {
				start: dayjs().startOf('day').toDate(),
				end: dayjs().endOf('day').toDate()
			};
		case DateRangeChoice.Week:
			return {
				start: dayjs().startOf('week').startOf('day').toDate(),
				end: dayjs().endOf('week').endOf('day').toDate()
			};
		case DateRangeChoice.Month:
			return {
				start: dayjs().startOf('month').startOf('day').toDate(),
				end: dayjs().endOf('month').endOf('day').toDate()
			};
		case DateRangeChoice.Quarter:
			return {
				start: dayjs().startOf('quarter').startOf('day').toDate(),
				end: dayjs().endOf('quarter').endOf('day').toDate()
			};
		case DateRangeChoice.HalfYear:
			if (dayjs().month() <= 5) {
				return {
					start: dayjs().month(0).date(1).startOf('day').toDate(),
					end: dayjs().month(5).date(30).endOf('day').toDate()
				};
			} else {
				return {
					start: dayjs().month(6).date(1).startOf('day').toDate(),
					end: dayjs().month(11).day(31).endOf('day').toDate()
				};
			}
		case DateRangeChoice.FullYear:
			return {
				start: dayjs().month(0).day(1).startOf('day').toDate(),
				end: dayjs().month(11).day(31).endOf('day').toDate()
			};
	}
}

export function formatDateRange({ start, end }: DateRange) {
	return `${dayjs(start).format(DateFormat.Full)} - ${dayjs(end).format(
		DateFormat.Full
	)}`;
}

class HoursDay {
  constructor() {
    this.isClosed = false;
    this.openIntervals = [];
  }
}

class HoursInterval {
  constructor(start, end) {
    this.end = '';
    this.start = '';
  }
}

class Holiday {
  constructor(date, closed, regular, intervals) {
    this.date = '';
    this.isClosed = false;
    this.isRegularHours = false;
    this.openIntervals = [];
  }
}

const DayKeys = {
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
  SATURDAY: 'saturday',
  SUNDAY: 'sunday',
};

class HoursData {
  constructor() {
    this.monday = new HoursDay();
    this.tuesday = new HoursDay();
    this.wednesday = new HoursDay();
    this.thursday = new HoursDay();
    this.friday = new HoursDay();
    this.saturday = new HoursDay();
    this.sunday = new HoursDay();
    this.holidayHours = [];
  }

  withHoliday (date, closed, regular, intervals) {
    this.holidayHours.push(new Holiday(date, closed, regular, intervals));
    return this;
  }

  withDaySetting(dayKey, closed, intervals) {
    this[dayKey] = new HoursDay(closed, intervals);
    return this;
  }
}

const ReferenceDate = new Date(2019, 7, 12); // Monday August 12, 2019

const ClosedAllWeek
  = new HoursData()
  .withDaySetting(DayKeys.MONDAY, true)
  .withDaySetting(DayKeys.TUESDAY, true)
  .withDaySetting(DayKeys.WEDNESDAY, true)
  .withDaySetting(DayKeys.THURSDAY, true)
  .withDaySetting(DayKeys.FRIDAY, true)
  .withDaySetting(DayKeys.SATURDAY, true)
  .withDaySetting(DayKeys.SUNDAY, true);

const NineToFive =
  new HoursData()
    .withDaySetting(DayKeys.MONDAY, false, [new HoursInterval('900', '1700')])
    .withDaySetting(DayKeys.TUESDAY, false, [new HoursInterval('900', '1700')])
    .withDaySetting(DayKeys.WEDNESDAY, false, [new HoursInterval('900', '1700')])
    .withDaySetting(DayKeys.THURSDAY, false, [new HoursInterval('900', '1700')])
    .withDaySetting(DayKeys.FRIDAY, false, [new HoursInterval('900', '1700')])
    .withDaySetting(DayKeys.SATURDAY, true)
    .withDaySetting(DayKeys.SUNDAY, true);

const SplitHours =
  new HoursData()
    .withDaySetting(DayKeys.MONDAY, false, [
      new HoursInterval('930', '1300'),
      new HoursInterval('1630', '200'),
    ])
    .withDaySetting(DayKeys.TUESDAY, false, [
      new HoursInterval('100', '1300'),
      new HoursInterval('1630', '2000'),
    ])
    .withDaySetting(DayKeys.WEDNESDAY, false, [
      new HoursInterval('930', '1300'),
      new HoursInterval('1630', '2000'),
    ])
    .withDaySetting(DayKeys.THURSDAY, false, [
      new HoursInterval('930', '1300'),
      new HoursInterval('1630', '2000'),
    ])
    .withDaySetting(DayKeys.FRIDAY, false, [
      new HoursInterval('930', '1300'),
      new HoursInterval('1630', '2000'),
    ])
    .withDaySetting(DayKeys.SATURDAY, false, [
      new HoursInterval('930', '1300'),
      new HoursInterval('1630', '2000'),
    ])
    .withDaySetting(DayKeys.SUNDAY, true, []);

const HolidayHours =
  new HoursData()
    .withDaySetting(DayKeys.MONDAY, false, [new HoursInterval('900', '1700')]) // 13th
    .withDaySetting(DayKeys.TUESDAY, false, [new HoursInterval('900', '1700')]) // 14th
    .withDaySetting(DayKeys.WEDNESDAY, false, [new HoursInterval('900', '1700')]) // 15th
    .withDaySetting(DayKeys.THURSDAY, false, [new HoursInterval('900', '1700')]) // 16th
    .withDaySetting(DayKeys.FRIDAY, false, [new HoursInterval('900', '1700')]) // 17th
    .withDaySetting(DayKeys.SATURDAY, true) // 18th
    .withDaySetting(DayKeys.SUNDAY, true) // 19th
    .withHoliday('2019-08-16', true, false, [])
    .withHoliday('2019-08-17', false, false, [
      new HoursInterval('500', '1200'),
      new HoursInterval('1500', '1900'),
    ])
    .withHoliday('2019-08-18', false, false, [
      new HoursInterval('0', '2359'),
    ])
    .withHoliday('2019-08-19', false, false, [
      new HoursInterval('500', '2100'),
    ]);

const Open24Seven =
  new HoursData()
    .withDaySetting(DayKeys.MONDAY, false, [])
    .withDaySetting(DayKeys.TUESDAY, false, [])
    .withDaySetting(DayKeys.WEDNESDAY, false, [])
    .withDaySetting(DayKeys.THURSDAY, false, [])
    .withDaySetting(DayKeys.FRIDAY, false, [])
    .withDaySetting(DayKeys.SATURDAY, false, [])
    .withDaySetting(DayKeys.SUNDAY, false, []);

export {
  ReferenceDate,
  ClosedAllWeek,
  NineToFive,
  SplitHours,
  HolidayHours,
  Open24Seven,
}

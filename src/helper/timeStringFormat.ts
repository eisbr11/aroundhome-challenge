import moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

const timeStringFormat = {
  toTime: (timeString: string): string => moment(timeString).format('LT'),
  toDate: (timeString: string): string => moment(timeString).format('DD.MM YYYY'),
  toWeekDay: (timeString: string): string => moment(timeString).format('dddd'),
};

export default timeStringFormat;

import {
  Companies,
  CompaniesApi,
  TimeSlot,
  TimeSlotApi,
  TimeSlotDate,
} from 'types/companies.type';

/**
 * Renames the time slot keys to pascal-Case
 * @param timeSlots
 */
const renameTimeSlots = (timeSlots: TimeSlotApi[]): TimeSlot[] => {
  const renamedTimeslots: TimeSlot[] = timeSlots.map((timeSlot) => (
    {
      startTime: timeSlot.start_time,
      endTime: timeSlot.end_time,
    }
  ));

  return renamedTimeslots;
};

/**
 * sort the timeSlots by startTime
 * @param timeSlots
 */
const sortTimeSlots = (timeSlots: TimeSlot[]): TimeSlot[] => {
  const sortedTimeslots: TimeSlot[] = timeSlots.sort((timeSlotA, timeSlotB) => {
    if (new Date(timeSlotA.startTime) > new Date(timeSlotB.startTime)) {
      return 1;
    }
    return -1;
  });
  return sortedTimeslots;
};

/**
 * groups the timeSlots by date of startTime
 * @param timeSlots
 */
const groupByDate = (timeSlots: TimeSlot[]): TimeSlotDate[] => {
  const groups: any = timeSlots.reduce((_groups: any, timeSlot) => {
    const date = timeSlot.startTime.split('T')[0];
    return {
      ..._groups,
      [date]: timeSlots,
    };
  }, {});

  const groupAsArray: TimeSlotDate[] = Object.keys(groups).map((date) => ({
    date,
    timeSlots: groups[date],
  }));

  return groupAsArray;
};

/**
 * transfer the api company data to the application data
 * @param fetchedCompanies
 */
const transformCompanyData = (
  fetchedCompanies: CompaniesApi,
): Companies => {
  const adjustedCompanyData:Companies = [];

  fetchedCompanies.map((fetchedCompany) => {
    const oldTimeSlots = fetchedCompany.time_slots;

    const renamedTimeslots = renameTimeSlots(oldTimeSlots);

    const sortedTimeslots = sortTimeSlots(renamedTimeslots);

    const groupedTimeSlots = groupByDate(sortedTimeslots);

    return adjustedCompanyData.push({
      id: fetchedCompany.id,
      name: fetchedCompany.name,
      type: fetchedCompany.type,
      timeSlotDates: groupedTimeSlots,
    });
  });
  return adjustedCompanyData;
};

export default transformCompanyData;

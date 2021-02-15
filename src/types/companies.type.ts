export type TimeSlotApi = {
  start_time: string;
  end_time: string;
};

export type TimeSlot = {
  startTime: string;
  endTime: string;
};

export type TimeSlotDate = {
  date: string,
  timeSlots: TimeSlot[]
};

type CompanyApi = {
  id: number;
  name: string;
  type: string;
  time_slots: TimeSlotApi[]
};

type Company = {
  id: number;
  name: string;
  type: string;
  timeSlotDates: TimeSlotDate[];
};

export type CompaniesApi = CompanyApi[];

export type Companies = Company[];

export type CompaniesStateType = {
  companies: Company[],
  isFetching: boolean,
  hasError: boolean,
};

export type ChosenTimeRange = {
  companyId: number,
  timeslot: TimeSlot,
};

export type ChosenTimeRangesStateType = ChosenTimeRange[];

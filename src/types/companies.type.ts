export type TimeSlotApi = {
  /**
   * the start time of a time slot as a ISO 8601 date string
   */
  start_time: string;
  /**
   * the end time of a time slot as a ISO 8601 date string
   */
  end_time: string;
};

export type TimeSlot = {
  /**
   * the start time of a time slot as a ISO 8601 date string
   */
  startTime: string;
  /**
   * the end time of a time slot as a ISO 8601 date string
   */
  endTime: string;
};

export type TimeSlotDate = {
  /**
   * the date for the timeslot
   */
  date: string,
  /**
   * the TimeSlots, that are available for this date
   */
  timeSlots: TimeSlot[]
};

type CompanyApi = {
  /**
   * the id of the company
   */
  id: number;
  /**
   * the name of the company
   */
  name: string;
  /**
   * the type of the data field
   */
  type: string;
  /**
   * all the available time slots for the company
   */
  time_slots: TimeSlotApi[]
};

export type Company = {
  /**
   * the id of the company
   */
  id: number;
  /**
   * the name of the company
   */
  name: string;
  /**
   * the type of the data field
   */
  type: string;
  /**
   * all the available time slots, grouped by date
   */
  timeSlotDates: TimeSlotDate[];
};

export type CompaniesApi = CompanyApi[];

export type Companies = Company[];

export type CompaniesStateType = {
  /**
   * the Company Data
   */
  companies: Company[],
  /**
   * will be true, when data is being fetched
   */
  isFetching: boolean,
  /**
   * will be true, when there is a connection error
   */
  hasError: boolean,
};

export type ChosenTimeRange = {
  /**
   * the id of the company
   */
  companyId: number,
  /**
   * the chosen time slot for a company
   */
  timeslot: TimeSlot,
};

export interface PostTimeSlots {
  user_data: UserDataApi;
  selected_slots: {
    [company_name: string]: TimeSlot,
  }
}

type UserDataApi = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type ChosenTimeRangesStateType = ChosenTimeRange[];

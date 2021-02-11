type TimeSlot = {
  start_time: string;
  end_time: string;
};

type Company = {
  id: number;
  name: string;
  type: string;
  time_slots: TimeSlot[]
};

export type CompaniesType = Company[];
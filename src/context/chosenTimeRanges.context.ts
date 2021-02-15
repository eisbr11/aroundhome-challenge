import { createContext, useContext } from 'react';

import { ChosenTimeRangesStateType, TimeSlot } from 'types/companies.type';

export type ChosenTimeRangesContextType = {
  chosenTimeRangesState: ChosenTimeRangesStateType;
  setChosenTimeRanges: (chosenTimeRanges: ChosenTimeRangesStateType) => void;
  getTimeSlotByCompanyId: (id: number) => TimeSlot;
  setTimeSlot: (companyId: number, timeslot: TimeSlot) => void;
  removeTimeSlot: (companyId: number) => void;
  getDisabledTimeSlotsForCompany: (companyId: number) => TimeSlot[];
};

export const ChosenTimeRangesContext = createContext<ChosenTimeRangesContextType>({
  chosenTimeRangesState: [],
  // eslint-disable-next-line no-console
  setChosenTimeRanges: () => console.warn('No provider found'),
  getTimeSlotByCompanyId: () => ({
    startTime: '',
    endTime: '',
  }),
  // eslint-disable-next-line no-console
  setTimeSlot: () => console.warn('No provider found'),
  // eslint-disable-next-line no-console
  removeTimeSlot: () => console.warn('No provider found'),
  getDisabledTimeSlotsForCompany: () => [],
});

export const useChosenTimeRangesState = () => useContext(ChosenTimeRangesContext);

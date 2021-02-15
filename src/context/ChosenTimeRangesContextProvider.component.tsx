import React from 'react';

import { ChosenTimeRangesStateType, TimeSlot } from 'types/companies.type';
import { ChosenTimeRangesContext } from './chosenTimeRanges.context';

const ChosenTimeRangesContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultTimeRanges:ChosenTimeRangesStateType = [];
  const [chosenTimeRangesState, setChosenTimeRanges] = React.useState(defaultTimeRanges);

  const getTimeSlotByCompanyId = (companyId: number): TimeSlot => {
    const chosenTimeRange = chosenTimeRangesState.find(
      (timeRange) => timeRange.companyId === companyId,
    );
    return ({
      startTime: chosenTimeRange ? chosenTimeRange.timeslot.startTime : '',
      endTime: chosenTimeRange ? chosenTimeRange.timeslot.endTime : '',
    });
  };

  const setTimeSlot = (companyId: number, timeslot: TimeSlot) => {
    setChosenTimeRanges((prevState) => {
      const filteredPrevState = prevState.filter(
        (chosenTimeRange) => companyId !== chosenTimeRange.companyId,
      );

      return (
        [
          ...filteredPrevState,
          {
            companyId,
            timeslot,
          },
        ]
      );
    });
  };

  const removeTimeSlot = (companyId: number) => {
    setChosenTimeRanges((prevState) => prevState.filter(
      (chosenTimeRange) => companyId !== chosenTimeRange.companyId,
    ));
  };

  const getDisabledTimeSlotsForCompany = (companyId: number): TimeSlot[] => {
    const filteredChosenTimeRanges = chosenTimeRangesState.filter(
      (chosenTimeRange) => companyId !== chosenTimeRange.companyId,
    );

    return filteredChosenTimeRanges.map((timeRange) => timeRange.timeslot);
  };

  return (
    <ChosenTimeRangesContext.Provider value={{
      chosenTimeRangesState,
      setChosenTimeRanges,
      getTimeSlotByCompanyId,
      setTimeSlot,
      removeTimeSlot,
      getDisabledTimeSlotsForCompany,
    }}
    >
      {children}
    </ChosenTimeRangesContext.Provider>
  );
};

export default ChosenTimeRangesContextProvider;

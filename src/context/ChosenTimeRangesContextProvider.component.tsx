import React from 'react';

import { ChosenTimeRangesStateType, TimeSlot } from 'types/companies.type';
import { ChosenTimeRangesContext } from './chosenTimeRanges.context';

/**
 * The Context Provider Wrapper for the chosen Time Ranges
 *
 * @param {*} children
 * @returns {JSX}
 * @constructor
 */
const ChosenTimeRangesContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultTimeRanges:ChosenTimeRangesStateType = [];
  const [chosenTimeRangesState, setChosenTimeRanges] = React.useState(defaultTimeRanges);

  /**
   * returns the chosen Time Slot for a company
   *
   * @param {number} companyId
   * @returns {TimeSlot}
   */
  const getTimeSlotByCompanyId = (companyId: number): TimeSlot => {
    const chosenTimeRange = chosenTimeRangesState.find(
      (timeRange) => timeRange.companyId === companyId,
    );
    return ({
      startTime: chosenTimeRange ? chosenTimeRange.timeslot.startTime : '',
      endTime: chosenTimeRange ? chosenTimeRange.timeslot.endTime : '',
    });
  };

  /**
   * set a Time Slot as chosen for a company, override the last one
   *
   * @param {number} companyId
   * @param {TimeSlot} timeslot
   */
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

  /**
   * removes the chosen Time Slot for a company
   *
   * @param {number} companyId
   */
  const removeTimeSlot = (companyId: number): void => {
    setChosenTimeRanges((prevState) => prevState.filter(
      (chosenTimeRange) => companyId !== chosenTimeRange.companyId,
    ));
  };

  /**
   * get all the Time Slots for a company, that should be disabled
   *
   * @param {number} companyId
   * @returns {TimeSlot[]}
   */
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

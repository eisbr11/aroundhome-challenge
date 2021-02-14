import React from 'react';

import { ChosenTimeRangesStateType } from 'types/companies.type';
import { ChosenTimeRangesContext } from './chosenTimeRanges.context';

const ChosenTimeRangesContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultTimeRanges:ChosenTimeRangesStateType = [
    {
      companyId: 1,
      timeslot: {
        startTime: '2018-07-09T08:00:00.000+02:00',
        endTime: '2018-07-09T09:30:00.000+02:00',
      },
    },
  ];
  const [chosenTimeRangesState, setChosenTimeRanges] = React.useState(defaultTimeRanges);

  return (
    <ChosenTimeRangesContext.Provider value={{ chosenTimeRangesState, setChosenTimeRanges }}>
      {children}
    </ChosenTimeRangesContext.Provider>
  );
};

export default ChosenTimeRangesContextProvider;

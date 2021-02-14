import { createContext, useContext } from 'react';
import { ChosenTimeRangesStateType } from 'types/companies.type';

export type ChosenTimeRangesContextType = {
  chosenTimeRangesState: ChosenTimeRangesStateType;
  setChosenTimeRanges: (chosenTimeRanges: ChosenTimeRangesStateType) => void;
};

export const ChosenTimeRangesContext = createContext<ChosenTimeRangesContextType>({
  chosenTimeRangesState: [],
  setChosenTimeRanges: () => console.warn('No provider found'),
});

export const useChosenTimeRangesState = () => useContext(ChosenTimeRangesContext);

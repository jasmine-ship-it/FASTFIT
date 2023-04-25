import { createContext, useState } from "react";

export const AthleteContext = createContext({
  athleteData: [],
  setAthleteData: () => null,
});

export const AthleteProvider = ({ children }) => {
  const [athleteData, setAthleteData] = useState([]);
  const value = { athleteData, setAthleteData };
  return (
    <AthleteContext.Provider value={value}>{children}</AthleteContext.Provider>
  );
};

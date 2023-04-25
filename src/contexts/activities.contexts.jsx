import { createContext, useState } from "react";

export const ActivitiesContext = createContext({
  activities: [],
  setActivities: () => null,
});

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const value = { activities, setActivities };
  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};

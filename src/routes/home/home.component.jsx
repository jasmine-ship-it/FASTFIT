import React, { useState, useEffect, useContext } from "react";
import Loading from "./../../pages/Loading";
import {
  getActivities,
  getTokens,
  //   getRefreshToken,
  getLoggedInAthlete,
} from "./../../utils/stravaAPI";
import { ActivitiesContext } from "./../../contexts/activities.contexts";
import { TokensContext } from "./../../contexts/tokens.contexts";
import { AthleteContext } from "../../contexts/athlete.contexts";

import { Routes, Route } from "react-router-dom";
import Activities from "./../../pages/Activities";
import Home from "./../../pages/Home";
// import Navigation from "./../navigation/navigation.component";
import Settings from "./../../pages/Settings";
import ResponsiveAppBar from "./../navigation/navbar.component";

function App() {
  const { setActivities } = useContext(ActivitiesContext);
  const { isGetTokens, setIsGetTokens } = useContext(TokensContext);
  const { setAthleteData } = useContext(AthleteContext);
  const [loading, setLoading] = useState(false);
  const [currentUrl] = useState(window.location.href);

  useEffect(() => {
    if (isGetTokens) {
      console.log("isGetTokens is true so will getLoggedInAthlete");
      setLoading(true);
      async function fetchData() {
        const response = await getLoggedInAthlete();
        const { data } = response;
        setAthleteData(data);
        setLoading(false);
      }
      fetchData();
    }
  }, [isGetTokens, setAthleteData]);

  useEffect(() => {
    if (isGetTokens) {
      console.log("isGetTokens is true so will getActivities");
      setLoading(true);
      async function fetchData() {
        const response = await getActivities();
        const { data } = response;
        setActivities(data);
        setLoading(false);
      }
      fetchData();
    }
  }, [isGetTokens, setActivities]);

  useEffect(() => {
    if (currentUrl.slice(0, 35) === "http://localhost:3000/?state=&code=") {
      console.log("url changed so will run getTokens command");
      async function fetchData() {
        await getTokens();
        console.log(`done with getTokens() call`);
      }
      fetchData();
      setIsGetTokens(true);
    }
    console.log(`isGetTokens is ${isGetTokens}`);
  }, [currentUrl, isGetTokens, setIsGetTokens]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ResponsiveAppBar />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

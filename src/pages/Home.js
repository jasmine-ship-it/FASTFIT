import React, { useState, useEffect } from "react";
import Login from "./Login";
import Loading from "./Loading";
import Athlete from "./Athlete";
import {
  redirectStravaAuth,
  getActivities,
  getTokens,
  // getRefreshToken,
  getLoggedInAthlete,
} from "../utils/stravaAPI";
import Activities from "./Activities";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isGetTokens, setIsGetTokens] = useState(false);
  const [currentUrl, setcurrentUrl] = useState(window.location.href);
  const [athleteData, setAthleteData] = useState([]);

  useEffect(() => {
    if (isGetTokens) {
      setLoading(true);
      async function fetchData() {
        const response = await getLoggedInAthlete();
        const { data } = response;
        setAthleteData(data);
        setLoading(false);
      }
      fetchData();
    }
  }, [isGetTokens]);

  useEffect(() => {
    if (isGetTokens) {
      setLoading(true);
      async function fetchData() {
        const response = await getActivities();
        const { data } = response;
        setActivities(data);
        setLoading(false);
      }
      fetchData();
    }
  }, [isGetTokens]);

  const connectStrava = () => {
    try {
      redirectStravaAuth();
      console.log("redirecting to strava");
    } catch (e) {
      console.log("cannot redirectStravaAuth");
    }
  };

  useEffect(() => {
    if (currentUrl.slice(0, 35) === "http://localhost:3000/?state=&code=") {
      async function fetchData() {
        await getTokens();
        setIsGetTokens(true);
      }
      fetchData();
    }
  }, [currentUrl]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Athlete athleteData={athleteData} />
      <Login connectStrava={connectStrava} />
      <Activities activities={activities} />
    </div>
  );
};

export default Home;

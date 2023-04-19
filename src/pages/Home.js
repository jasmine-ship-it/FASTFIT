import React, { useState, useEffect } from "react";
import Login from "./Login";
import Loading from "./Loading";
import {
  redirectStravaAuth,
  getActivities,
  getTokens,
  // getRefreshToken,
} from "../utils/stravaAPI";
import Activities from "./Activities";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stravaConnect, setStravaConnect] = useState(false);
  const [isGetTokens, setIsGetTokens] = useState(false);
  const [currentUrl, setcurrentUrl] = useState(window.location.href);

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
    <article className="single-tour">
      <div className="title">
        <h2>Home Component</h2>
        <div className="underline"></div>
        <div>{stravaConnect ? <p>logged in</p> : <p>not logged in</p>}</div>
      </div>
      <Login connectStrava={connectStrava} />
      <Activities activities={activities} />
    </article>
  );
};

export default Home;

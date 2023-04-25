// import { React, useContext } from "react";
import { React } from "react";
import { Outlet, Link } from "react-router-dom";
import stravalogo from "../../assets/btn_strava_connectwith_orange.svg";
import { redirectStravaAuth } from "../../utils/stravaAPI";

const Navigation = () => {
  const connectStrava = () => {
    try {
      redirectStravaAuth();
      console.log("redirecting to strava");
    } catch (e) {
      console.log("cannot redirectStravaAuth");
    }
  };

  return (
    <>
      <div className="navigation">
        <h1>RUNSAM</h1>
        <div>
          <img
            className="strava-logo"
            src={stravalogo}
            onClick={() => connectStrava()}
            alt="strava-logo"
          />
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/activities">
            activities
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/">
            home
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

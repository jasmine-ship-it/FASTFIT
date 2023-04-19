import React from "react";
// import { getRefreshToken } from "../utils/stravaAPI";
import stravalogo from "../images/btn_strava_connectwith_orange.svg";

// import { redirectWithingsAuth } from "../utils/withingsAPI";

const Login = ({ connectStrava }) => {
  return (
    <article className="single-tour">
      <div className="title">
        <h2>Login Component</h2>
        <div className="underline"></div>
        <div>
          <button>
            <img
              className="strava-logo"
              src={stravalogo}
              onClick={() => connectStrava()}
              alt="strava-logo"
            />
          </button>

          {/* <div>
            <button className="btn" onClick={getRefreshToken}>
              refresh token
            </button>
          </div> */}
        </div>
        <div>
          {/* <button onClick={redirectWithingsAuth}>Connect with Withings</button> */}
        </div>
      </div>
    </article>
  );
};

export default Login;

//athelete clicks to log in to your app
//athlete redirected to OAuth page
//athlete cliks 'authorize'
//athelete redirected to your URL
//developer given authorization code and scope for the athelete
//developer checks if athelete gave the required scopes
//developer makes request to exhcange auth code for shortlived access token
//developer will receive a refresh token, access token, access token expiration date
//now you can make API requests to obtain data for the athelete

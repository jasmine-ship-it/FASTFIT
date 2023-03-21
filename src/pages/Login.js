import React from "react";
import {
  redirectStravaAuth,
  getTokens,
  getActivities,
  getRefreshToken,
} from "../api";

const Login = () => {
  return (
    <div>
      <h1>Login Component</h1>
      <div>
        <button onClick={redirectStravaAuth}>Connect with Strava</button>
        <button onClick={getTokens}>Login</button>
        <button onClick={getRefreshToken}>refresh token</button>
        <button onClick={getActivities}>Show Activities</button>
      </div>
    </div>
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

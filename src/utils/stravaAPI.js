import axios from "axios";

const scope = "read_all";
const redirect_uri = "http://localhost:3000";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const redirectStravaAuth = async () => {
  window.location.assign(
    `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code&scope=activity:${scope}`
  );
};

// https://www.strava.com/oauth/authorize?client_id=103108&redirect_uri=http://localhost:3000&response_type=code&scope=activity:read_all

// http://localhost:3000/?state=&code=45abe51795772c9fabb3e751162651d98c34f0a1&scope=read,activity:read_all
export const getTokens = async () => {
  const updatedUrl = window.location.href;
  let authCode = updatedUrl.slice(35, 75);
  console.log(`authcode is ${authCode}`);
  console.log(`updatedUrl is ${updatedUrl}`);

  try {
    const getToken = await axios.post(
      `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}&code=${authCode}&grant_type=authorization_code`
    );

    let response = getToken.data;
    let refreshToken = response.refresh_token;
    let accessToken = response.access_token;

    console.log(`Bearer token expires at ${response.expires_at}`);
    console.log(`Bearer token expires in ${response.expires_in}`);
    console.log(`refresh token ${response.refresh_token}`);
    console.log(`access token ${response.access_token}`);
    console.log(
      `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`
    );

    return (
      localStorage.setItem("authCode", authCode),
      localStorage.setItem("refreshToken", refreshToken),
      localStorage.setItem("accessToken", accessToken)
    );
  } catch (e) {
    console.log(e);
  }
};

export const getRefreshToken = async () => {
  let currentAuthCode = localStorage.getItem("authCode");
  let currentRefreshToken = localStorage.getItem("refreshToken");
  try {
    const getRefreshToken = await axios.post(
      `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}&code=${currentAuthCode}&grant_type=refresh_token&refresh_token=${currentRefreshToken}`
    );
    let response = getRefreshToken.data;
    let refreshToken = response.refresh_token;
    let accessToken = response.access_token;
    return (
      localStorage.setItem("refreshToken", refreshToken),
      localStorage.setItem("accessToken", accessToken)
    );
  } catch (e) {
    console.log(e);
  }
};

export const getActivities = async (accessToken) => {
  let accessToken2 = localStorage.getItem("accessToken");

  try {
    const activitiesData = await axios.get(
      `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken2}`
    );
    // const averageHeartrate = response.data[0].average_heartrate;
    // console.log(activitiesData.data);
    // console.log(type);
    return activitiesData;
  } catch (e) {
    console.log(`error:${e}`);
  }
};

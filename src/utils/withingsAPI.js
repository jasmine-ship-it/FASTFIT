import axios from "axios";
import hmacSHA256 from "crypto-js/hmac-sha256";

const redirect_uri = "http://localhost:80";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_WITHINGS;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY_WITHINGS;
const CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL_WITHINGS;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT_WITHINGS;

export const redirectWithingsAuth = async () => {
  window.location.assign(
    `https://account.withings.com/oauth2_user/authorize2?response_type=code&client_id=${CLIENT_ID}&state=submit&scope=user.metrics&redirect_uri=${CALLBACK_URL}`
    // https://account.withings.com/oauth2_user/authorize2?response_type=code&client_id=&state=submit&scope=user.metrics&redirect_uri=http%3A%2F%2Flocalhost%3A80&selecteduser=17103855
  );
};

const getNonce = () => {
  const action = "getnonce";
  const timestamp = Date.now().toString();
  const array = [CLIENT_ID, action, timestamp].sort();
  const arrayJoined = array.join();
  return hmacSHA256(arrayJoined, "");
};

export const getAccessToken = async () => {
  const currentUrl = window.location.href;
  let authCode = currentUrl.slice(22, 63);
  console.log(`authcode is ${authCode}`);
  console.log(`currentUrl is ${currentUrl}`);
  // http://localhost/?code=1c816d6afda08ce96d0f07de1ae7a11e6fa7b134&state=submit

  // action=requesttoken
  // &grant_type=authorization_code
  // &client_id=7573fd4a4c421ddd102dac406dc6e0e0e22f683c4a5e81ff0a5caf8b65abed67
  // &client_secret=d9286311451fc6ed71b372a075c58c5058be158f56a77865e43ab3783255424f
  // &code=mtwsikawoqleuroqcluggflrqilrnqbgqvqeuhhh
  // &redirect_uri=https://www.withings.com" 'https://wbsapi.withings.net/v2/oauth2'
  try {
    const { getToken } = await axios.post(
      "https://wbsapi.withings.net/v2/oauth2",
      {
        action: "Fred",
        client_id: "Flintstone",
        nonce: [1, 2, 3],
        signature: "", //hash of params
        client_secret: SECRET_KEY,
        grant_type: "authorization_code",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    let response = getToken.data;
    let refreshToken = response.refresh_token;
    let accessToken = response.access_token;
    let nonce = getNonce();
    // console.log(`Bearer token expires at ${response.expires_at}`);
    // console.log(`Bearer token expires in ${response.expires_in}`);
    // console.log(`refresh token ${response.refresh_token}`);
    // console.log(`access token ${response.access_token}`);
    // console.log(
    //   ``
    // );

    return (
      localStorage.setItem("authCode", authCode),
      localStorage.setItem("refreshToken", refreshToken),
      localStorage.setItem("accessToken", accessToken)
    );
  } catch (e) {
    console.log(e);
  }
};

// export const getRefreshToken = async () => {
//   let currentAuthCode = localStorage.getItem("authCode");
//   let currentRefreshToken = localStorage.getItem("refreshToken");
//   try {
//     const getRefreshToken = await axios.post(``);
//     let response = getRefreshToken.data;
//     let refreshToken = response.refresh_token;
//     let accessToken = response.access_token;
//     return (
//       localStorage.setItem("refreshToken", refreshToken),
//       localStorage.setItem("accessToken", accessToken)
//     );
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const getActivities = async (accessToken) => {
//   let accessToken2 = localStorage.getItem("accessToken");

//   try {
//     const response = await axios.get(``);
//     console.log(response.data[0]);
//   } catch (e) {
//     console.log(`error:${e}`);
//   }
// };

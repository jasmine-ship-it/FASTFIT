import React from "react";
import { redirectStravaAuth } from "./../utils/stravaAPI";
import stravalogo from "./../assets/btn_strava_connectwith_orange.svg";
import { StravaContainer } from "./settings.styles";

const Settings = () => {
  const connectStrava = () => {
    try {
      redirectStravaAuth();
      console.log("redirecting to strava");
    } catch (e) {
      console.log("cannot redirectStravaAuth");
    }
  };
  return (
    <article>
      <div>
        <h2>Settings </h2>
        <div></div>
        <div>
          <StravaContainer>
            <img
              src={stravalogo}
              onClick={() => connectStrava()}
              alt="strava-logo"
            />
          </StravaContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui
            necessitatibus sunt voluptas placeat nam incidunt totam impedit,
            fuga tenetur provident quis fugit non, atque iure ea, doloremque
            quasi! Exercitationem!
          </p>
        </div>
      </div>
    </article>
  );
};

export default Settings;

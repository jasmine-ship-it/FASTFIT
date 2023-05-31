import React, { useContext } from "react";
import { AthleteContext } from "../contexts/athlete.contexts";
import Box from "@mui/material/Box";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const { athleteData } = useContext(AthleteContext);

  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1553969546-6f7388a7e07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          // width: "100vw",
        }}
      />

      <HomeContainer>
        <h1>
          Welcome {athleteData.firstname}
          {athleteData.lastname}!
        </h1>
        <p>
          "Welcome to our running app! Get ready to track your progress and
          connect with fellow runners. Click on settings to connect to Strava
          API and start your journey!"
        </p>
      </HomeContainer>
    </div>
  );
};

export default Home;

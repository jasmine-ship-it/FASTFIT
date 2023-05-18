import React, { useContext } from "react";
import { AthleteContext } from "../contexts/athlete.contexts";
import Box from "@mui/material/Box";

const Home = () => {
  const { athleteData } = useContext(AthleteContext);

  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1553969546-6f7388a7e07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80)`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <h1>
        Welcome {athleteData.firstname}
        {athleteData.lastname}!
      </h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
        exercitationem laudantium omnis unde reprehenderit dolorem
        necessitatibus, et expedita assumenda distinctio neque architecto,
        dolores eveniet hic sit provident eaque optio. Ullam?
      </p>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { AthleteContext } from "../contexts/athlete.contexts";

const Home = () => {
  const { athleteData } = useContext(AthleteContext);

  return (
    <div>
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

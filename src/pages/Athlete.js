import React from "react";

const Athlete = ({ athleteData, athleteStats }) => {
  return (
    <div>
      <div className="title">
        <div>
          <article className="single-tour">
            <h3>
              {athleteData.firstname} {athleteData.lastname}
            </h3>
            <img
              src={athleteData.profile}
              alt="profile-pic"
              className="profile-pic"
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Athlete;

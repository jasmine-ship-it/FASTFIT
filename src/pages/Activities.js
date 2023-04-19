import React from "react";

// import React, { useEffect, useState } from "react";

const Activities = ({ activities }) => {
  return (
    <div>
      <div className="title">
        <h2>Activities Component</h2>
        <div className="underline"></div>
        <div>
          {activities.map((activity, index) => {
            const distance = activity.distance;
            return (
              <article key={index} className="single-tour">
                <h3>{activity.name}</h3>
                <p>Date:{activity.start_date}</p>
                <p>Distance: {(distance / 1000).toFixed(1)}km</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;

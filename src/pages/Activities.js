import React from "react";

const Activities = ({ activities }) => {
  return (
    <div>
      <div className="title">
        <h2>Activities </h2>
        <div className="underline"></div>
        <div>
          {activities.map((activity, index) => {
            const distance = activity.distance;
            const averageSpeed = activity.average_speed;
            const maxSpeed = activity.max_speed;
            const elapsedTime = activity.elapsed_time;

            return (
              <article key={index} className="single-tour">
                <h3>Distance: {(distance / 1000).toFixed(1)}km</h3>
                <div>
                  <p>{activity.name}</p>
                  <p>Date: {activity.start_date}</p>
                  <p>Average Cadence: {activity.average_cadence}</p>
                  <p>
                    Average Heartrate: {activity.average_heartrate.toFixed(0)}{" "}
                    bpm{" "}
                  </p>
                  <p>Max Heartrate: {activity.max_heartrate.toFixed(0)} bpm</p>
                  <p>
                    Average Speed: {((averageSpeed * 100) / 6).toFixed(1)}{" "}
                    min/km
                  </p>
                  <p>Max Speed: {((maxSpeed * 100) / 6).toFixed(1)} min/km</p>
                  <p>Elapsed Time: {(elapsedTime / 60).toFixed(0)} mins</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;

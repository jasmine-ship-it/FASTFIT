import React from "react";
import { useContext } from "react";
import { ActivitiesContext } from "../contexts/activities.contexts";

const Activities = () => {
  const { activities } = useContext(ActivitiesContext);

  return (
    <div>
      <div className="title">
        <h2>Activities </h2>
        <div className="underline"></div>

        <div>
          {activities.map((activity, index) => {
            const distance = activity.distance;
            const elapsedTime = activity.elapsed_time;
            const averageCadence = activity.average_cadence;

            const averageSpeed = activity.average_speed;
            const averageSpeed_min = (100 / 6 / averageSpeed).toFixed(0);
            const averageSpeed_sec = (
              ((100 / 6 / averageSpeed) % 1) *
              60
            ).toFixed(0);

            const maxSpeed = activity.max_speed;
            const maxSpeed_min = (100 / 6 / maxSpeed).toFixed(0);
            const maxSpeed_sec = (((100 / 6 / maxSpeed) % 1) * 60).toFixed(0);

            const averageHeartrate = activity.average_heartrate;
            const maxHeartrate = activity.max_heartrate;

            return (
              <article key={index} className="single-tour">
                <h3>Distance: {(distance / 1000).toFixed(1)}km</h3>
                <div>
                  <p>{activity.name}</p>
                  <p>Date: {activity.start_date}</p>
                  <p>Average Cadence: {averageCadence}</p>
                  <p>Average Heartrate: {averageHeartrate} bpm</p>
                  <p>Max Heartrate: {maxHeartrate} bpm</p>
                  <p>
                    Average Speed: {averageSpeed_min}:{averageSpeed_sec} min/km
                  </p>
                  <p>
                    Max Speed: {maxSpeed_min}:{maxSpeed_sec} min/km
                  </p>
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

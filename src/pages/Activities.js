import React, { useContext } from "react";
import { ActivitiesContext } from "../contexts/activities.contexts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Activities = () => {
  const { activities } = useContext(ActivitiesContext);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Run Distance (km)</TableCell>
              <TableCell align="right">Elapsed Time (mins)</TableCell>
              <TableCell align="right">Av. Speed (min/km)</TableCell>
              <TableCell align="right">Max. Speed (min/km)</TableCell>
              <TableCell align="right">Cadence</TableCell>
              <TableCell align="right">Av. Heartrate (bpm)</TableCell>
              <TableCell align="right">Max. Heartrate (bpm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity, index) => {
              const distance = activity.distance;
              const elapsedTime = activity.elapsed_time;
              const averageCadence = activity.average_cadence;
              const averageCadence_roundedup =
                parseInt(averageCadence).toFixed(0);

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
              const averageHeartrate_roundedup =
                parseInt(averageHeartrate).toFixed(0);

              const maxHeartrate = activity.max_heartrate;
              const maxHeartrate_roundedup = parseInt(maxHeartrate).toFixed(0);

              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {(distance / 1000).toFixed(1)}km
                  </TableCell>
                  <TableCell align="right">
                    {(elapsedTime / 60).toFixed(1)}
                  </TableCell>
                  <TableCell align="right">
                    {averageSpeed_min}:{averageSpeed_sec}
                  </TableCell>
                  <TableCell align="right">
                    {maxSpeed_min}:{maxSpeed_sec}
                  </TableCell>
                  <TableCell align="right">
                    {averageCadence_roundedup}
                  </TableCell>
                  <TableCell align="right">
                    {averageHeartrate_roundedup}
                  </TableCell>
                  <TableCell align="right">{maxHeartrate_roundedup}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Activities;

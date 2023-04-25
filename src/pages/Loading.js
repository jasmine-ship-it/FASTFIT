import React from "react";
// import { CircularProgressWithLabel } from "@mui/material";
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

const Loading = () => {
  // function CircularProgressWithLabel(props) {
  //   return (
  //     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
  //       <CircularProgress variant="determinate" {...props} />
  //       <Box
  //         sx={{
  //           top: 0,
  //           left: 0,
  //           bottom: 0,
  //           right: 0,
  //           position: 'absolute',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         <Typography variant="caption" component="div" color="text.secondary">
  //           {`${Math.round(props.value)}%`}
  //         </Typography>
  //       </Box>
  //     </Box>
  //   );
  // }

  // CircularProgressWithLabel.propTypes = {
  //   /**
  //    * The value of the progress indicator for the determinate variant.
  //    * Value between 0 and 100.
  //    * @default 0
  //    */
  //   value: PropTypes.number.isRequired,
  // };

  // export default function CircularStatic() {
  //   const [progress, setProgress] = React.useState(10);

  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  //   return <CircularProgressWithLabel value={progress} />;
  // }
  return (
    <article>
      <div>
        <h2>Loading Component</h2>
        <div></div>
        <div>
          {/* <CircularProgressWithLabel value={progress} /> */}
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

export default Loading;

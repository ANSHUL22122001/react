import React from "react";
import VideoPlayer from "./VideoPlayer";

import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";

function VideoBox(props) {
  const { videos } = props;
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "#181818",
        overflowY: "auto",
        height: "90vh",
      }}
    >
      {videos.length === 0 ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : (
        <Grid container spacing={1}>
            {videos.map((item, index) => {
            
            return (
              <Grid item lg={3} md={4} sm={6} key={index}>
                <VideoPlayer item={item} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
// #212121
// rgba(33, 33, 33, 0.98);
export default VideoBox;

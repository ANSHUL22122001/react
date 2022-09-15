import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import FastForwardIcon from "@mui/icons-material/FastForward";

function ChannelPlaylists() {
  const channelVideos = useSelector((state) => state.channelVideos)
  
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h4>Uploads</h4>
      <Grid container>
        {channelVideos?.slice(channelVideos.length / 2, channelVideos.length)
          ?.map((data, index) => {
            const { videoId } = data?.video;

            return (
              <Grid item lg={2} md={4} sm={6} key={index}>
                <Link to={videoId ? `/video/${videoId}` : "#"}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      background: "none",
                      color: "white",
                      margin: "5px",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={data?.video?.thumbnails[2]?.url}
                        alt="green iguana"
                        sx={{
                          display: "block",
                          width: "100%",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          position: "absolute",
                          bottom: "0",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <div style={{ flex: "0.55" }}></div>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          style={{
                            background: "rgba(0, 0, 0, 0.7)",
                            flex: "0.45",
                            color: "white",
                            fontSize: "20px",
                          }}
                        >
                          <center>
                            <h6>30</h6>
                            <FastForwardIcon fontSize="large" />
                          </center>
                        </Stack>
                      </div>
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle"
                        component="div"
                      >
                        {data?.video?.title?.slice(0, 40)} ...
                      </Typography>
                      <Typography variant="body2" color="#808080">
                        VIEW PLAYLIST
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default ChannelPlaylists;

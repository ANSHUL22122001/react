import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import {
  demoVideoUrl,
} from "../../Utils/Constants";

function ChannelHome() {
  const channelVideos = useSelector((state) => state.channelVideos)

  // console.log(channelVideos);
  const i = Math.floor(Math.random() * channelVideos.length);
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num < 900) {
      return num;
    }
  }
  return (
    <>
      {channelVideos.length > 0 && (
        <div className="container" style={{ marginTop: "20px" }}>
          <Grid container>
            <Stack
              direction="row"
              sx={{
                overflowX: "scroll",
                borderBottom: "1px solid grey",
                width: "100%",
                marginBottom: "30px",
              }}
            >
              <Grid item lg={4} md={6} sm={12}>
                <img
                  src={channelVideos[i]?.video?.thumbnails[2]?.url}
                  style={{
                    width: "100%",
                    paddingRight: "30px",
                    paddingBottom: "30px",
                  }}
                  alt={channelVideos[i]?.video?.title}
                />
              </Grid>
              <Grid item lg={8} md={6} sm={12}>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                >
                  {channelVideos[i]?.video?.title}
                </Typography>
                <Typography gutterBottom variant="subtitle" component="div">
                  {`${channelVideos[i]?.video?.stats?.views} views  <|=|>  ${channelVideos[i]?.video?.publishedTimeText}`}
                  <br />
                </Typography>
              </Grid>
            </Stack>
          </Grid>
          <h4>Popular Uploads</h4>
          <Grid container>
            <Stack
              direction="row"
              sx={{
                overflowX: "scroll",
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
                width: "100%",
                marginBottom: "30px",
              }}
            >
              {channelVideos?.slice(0, 10)?.map((data, index) => {
                const { videoId, thumbnails, title, publishedTimeText, stats } =
                  data?.video;

                return (
                  <Link to={videoId ? `/video/${videoId}` : "#"} key={index}>
                    <Card
                      sx={{
                        minWidth: 200,
                        background: "none",
                        color: "white",
                        marginRight: "10px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={thumbnails ? thumbnails[2]?.url : demoVideoUrl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="subtitle"
                          component="div"
                        >
                          {title?.slice(0, 40)} ...
                        </Typography>
                        <Typography variant="body2" color="#808080">
                          {`${numFormatter(
                            stats?.views
                          )} views . ${publishedTimeText}`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </Stack>
          </Grid>
          <h4>Uploads</h4>
          <Grid container>
            <Stack
              direction="row"
              sx={{
                overflowX: "scroll",
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
                width: "100%",
                marginBottom: "30px",
              }}
            >
              {channelVideos?.slice(10, 20)?.map((data, index) => {
                const { videoId, thumbnails, title, publishedTimeText, stats } =
                  data?.video;

                return (
                  <Link to={videoId ? `/video/${videoId}` : "#"} key={index}>
                    <Card
                      sx={{
                        minWidth: 200,
                        background: "none",
                        color: "white",
                        marginRight: "10px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={thumbnails ? thumbnails[2]?.url : demoVideoUrl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="subtitle"
                          component="div"
                        >
                          {title?.slice(0, 40)} ...
                        </Typography>
                        <Typography variant="body2" color="#808080">
                          {`${numFormatter(
                            stats?.views
                          )} views . ${publishedTimeText}`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </Stack>
          </Grid>
          <h4>Trending</h4>
          <Grid container>
            <Stack
              direction="row"
              sx={{
                overflowX: "scroll",
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
                width: "100%",
                marginBottom: "30px",
              }}
            >
              {channelVideos?.slice(20, 30)?.map((data, index) => {
                const { videoId, thumbnails, title, publishedTimeText, stats } =
                  data?.video;

                return (
                  <Link
                    to={videoId ? `/video/${data.videoId}` : "#"}
                    key={index}
                  >
                    <Card
                      sx={{
                        minWidth: 200,
                        background: "none",
                        color: "white",
                        marginRight: "10px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={thumbnails ? thumbnails[2]?.url : demoVideoUrl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="subtitle"
                          component="div"
                        >
                          {title?.slice(0, 40)} ...
                        </Typography>
                        <Typography variant="body2" color="#808080">
                          {`${numFormatter(
                            stats?.views
                          )} views . ${publishedTimeText}`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </Stack>
          </Grid>
        </div>
      )}
    </>
  );
}

export default ChannelHome
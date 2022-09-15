import React from 'react';
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

function ChannelVideos() {
  const channelVideos = useSelector((state) => state.channelVideos);
  // console.log(channelVideos);
  function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
  }
  return (
    <div className="container" style={{ marginTop: "20px" }}>
        <h4>Uploads</h4>
        <Grid container>
        {channelVideos?.map((data, index) => {
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
                    <CardMedia
                      component="img"
                      height="140"
                      image={data?.video?.thumbnails[2]?.url}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle"
                        component="div"
                      >
                        {data?.video?.title.slice(0, 40)} ...
                      </Typography>
                      <Typography variant="body2" color="#808080">
                        {`${numFormatter(data?.video?.stats.views)} views . ${
                          data?.video?.publishedTimeText
                        }`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
        })
        }
        </Grid>
    </div>
  );
}

export default ChannelVideos
import React from 'react';
import { Stack, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../../Utils/Constants";

function VideoPlayer(props) {
  const { videoId } = props.item.id;
  const { channelId, thumbnails, title, channelTitle } = props.item.snippet;
  return (
    <Card
      sx={{
        m: 2,
        mb: 5,
        background: "#181818",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            height="140"
            image={thumbnails?.high?.url}
            alt={title}
          />
        </Link>
        <CardContent sx={{ height: "106px" }}>
          <Stack flexDirection="column">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography
                gutterBottom
                variant="subtitle1"
                fontWeight="bold"
                component="div"
                color="white"
              >
                {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                {title.length > 60 ? ". . . ." : ""}
              </Typography>
            </Link>
            <Link to={channelId ? `/channel/${channelId}/home` : demoChannelUrl}>
              <Typography variant="body2" color="#808080">
                {channelTitle || demoChannelTitle}
              </Typography>
            </Link>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoPlayer
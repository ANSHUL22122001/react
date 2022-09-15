import React from 'react'
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  demoChannelUrl,
} from "../../Utils/Constants";

function SearchChannelCard(props) {
  const {
    channelId,
    avatar,
    descriptionSnippet,
    stats,
    title
  } = props.channel;

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
    // console.log(props.channel);
  return (
    <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
      <Grid container m={2}>
        <Grid item md={4} className="d-flex justify-content-center align-item-center">
          <img
            src={avatar[0].url}
            alt={title}
            style={{
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontSize: {
                sx: "20px",
                md: "27px",
              },
            }}
            fontWeight="bold"
            color="white"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="#808080">
            {`${stats.subscribersText} . ${numFormatter(stats.videos)} videos`}
          </Typography>
          <div className="d-flex, align-items-center">
            <img
              style={{
                borderRadius: "50%",
                margin: "15px 1px",
                marginRight: "15px",
                width: {
                  sx: "20px",
                  md: "30px",
                },
              }}
              width="30px"
              src={avatar[0].url}
              alt={title}
            />
            <Typography variant="subtitle" color="#808080">
              {title}
            </Typography>
          </div>
          <Typography variant="body2" color="#808080">
            {descriptionSnippet}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
}

export default SearchChannelCard
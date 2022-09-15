import React from 'react';

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import {
  demoVideoUrl,
} from "../../Utils/Constants";

function SearchVideoCard(props) {
    const {
      videoId,
      author,
      descriptionSnippet,
      thumbnails,
      stats,
      title,
      publishedTimeText,
    } = props.videos;

    function numFormatter(num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
    }
                
    return (
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Grid container m={2}>
          <Grid item md={4}>
            <img src={thumbnails[0]?.url} alt={title} width="90%" />
          </Grid>
          <Grid item md={8}>
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
              {`${numFormatter(stats.views)} views . ${publishedTimeText}`}
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
                src={author?.avatar[0].url}
                alt={author?.title}
              />
              <Typography variant="subtitle" color="#808080">
                {author?.title}
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

export default SearchVideoCard
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import LinearProgress from "@mui/material/LinearProgress";
import { fetchChannelApi } from "../../Utils/fetchFromApi"; 
import VideoPlayer from './VideoPlayer';

function VideoDetail() {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);

  const [suggestedVideos, setSuggestedVideos] = useState(null);

  useEffect(() => {
    fetchChannelApi(`/video/details/?id=${id}`).then((data) => setCurrentVideo(data));
    fetchChannelApi(`/video/related-contents/?id=${id}`).then((data) => setSuggestedVideos(data.contents));
  }, [id]);
  return (
    <Box minHeight="93vh">
      {currentVideo && suggestedVideos ? (
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
        >
          <Box flex={0.7}>
            <Box
              sx={{
                width: "100%",
                position: "sticky",
                top: "86px",
              }}
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls={true}
                height="77vh"
                width="100%"
              />
              <Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
                {currentVideo?.title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  color: "#fff",
                }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${currentVideo?.athour?.channelId}/home`}>
                  <Typography
                    varient={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {currentVideo?.author?.title}
                    <CheckCircle
                      sx={{
                        fontSize: "12px",
                        color: "gray",
                        ml: "5px",
                      }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography varient="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(currentVideo?.stats?.views).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography varient="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(currentVideo?.stats?.likes).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            flex={0.3}
            px={2}
            py={{
              md: 1,
              xs: 5,
            }}
            sx={{
              top: "86px",
            }}
            justifyContent="center"
            alignItem="center"
          >
            <VideoPlayer videos={suggestedVideos} />
          </Box>
        </Stack>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="inherit" />
        </Box>
      )}
    </Box>
  );
}

export default VideoDetail;
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import Suggestion from './Suggestion';
import { fetchFromApi } from '../../Utils/fetchFromApi';
import VideoBox from "./VideoBox";

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {

        setVideos([]);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        
        // console.log(data);
        setVideos(data.items)
      });
    
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: "column",
      }}
    >
      <Suggestion setSelectedCategory={setSelectedCategory} />
      <VideoBox videos={videos} />

      {/* <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          px: {
            sx: 0,
            md: 2,
          },
          borderRight: "1px solid #3d3d3d"
        }}
      >
         <SideBar /> 
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "white"
          }}
        >
          CopyRight 2022
        </Typography>
      </Box>
      <Box>
        <Typography varient="h4" fontWeight="bold">
          <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
      </Box>
      Feed */}
    </Stack>
  );
}

export default Feed;
// #181818
// #aaa;
// rgba(255, 255, 255, 0.1);
// rgba(255, 255, 255, 0.1);

// searchbar
// hsl(0, 0%, 18.82%)
// hsl(0, 0%, 7%)
// hsl(0, 0%, 18.82%)
// hsla(0, 0%, 100%, 0.08)
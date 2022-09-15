import React, {useState, useEffect} from 'react';
import { Box, Stack } from '@mui/material';
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { fetchChannelApi } from "../../Utils/fetchFromApi";
import SearchVideoCard from './SearchVideoCard';
import SearchChannelCard from "./SearchChannelCard";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos([]);
    fetchChannelApi(`search/?q=${searchTerm}`).then((data) => {
      // console.log(data);
      setVideos(data.contents);
    });
  }, [searchTerm]);

  return (
    <Stack
      flexDirection="column"
      sx={{
        height: "93.6vh",
        overflowY: "auto",
      }}
    >
      {videos.length === 0 ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : (
          <Box className="container">
            {
              videos?.map((item, index) => {
                return (
                  <div key={index} style={{marginTop: '20px'}}>
                    {
                      item.type === "video" ?
                        <SearchVideoCard videos={item.video} /> :
                        <SearchChannelCard channel={item.channel} />
                    }
                  </div>
                );
              })
            }
          
        </Box>
      )}
    </Stack>
  );
}

export default SearchFeed;
import React, { useEffect, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelApi } from "../../Utils/fetchFromApi";
import LinearProgress from "@mui/material/LinearProgress";
import {
  youtubeChannelPages,
} from "../../Utils/Constants";

import {
  channelVideos,
  otherChannels,
  channelDetails,
} from "../../actions/videoActions";

function Main() {
  
  const dispatch = useDispatch();
  const [Channel, setChannel] = useState(useSelector((state) => state.channelDetails));
  let { id } = useParams();
  useEffect(() => {
    

    fetchChannelApi(`channel/channels/?id=${id}`).then((data) => {
      // console.log("channel channels=>", data);
      dispatch(otherChannels(data.collections));
    });

    fetchChannelApi(`channel/videos/?id=${id}`).then((data) => {
      // console.log("Channel videos=>", data);
      dispatch(channelVideos(data.contents));
    });

    fetchChannelApi(`channel/details/?id=${id}`).then((data) => {
      // console.log("Channel Details=>", data);
      setChannel(data);
      dispatch(channelDetails(data));
    });


  }, [id])
  let { pathname } = useLocation();
  let routePath = pathname.split('/');
  let test = routePath[routePath.length - 1];
  
  return (
    <Stack
      sx={{
        flexDirection: "column",
      }}
    >
      {Channel ? (
        <Box
          sx={{
            flexGrow: 1,
            background: "black",
            overflowY: "auto",
            height: "93vh",
          }}
        >
          {/* {brandingSettings.image.bannerExternalUrl ? (
          <Banner data={brandingSettings} />
        ) : null} */}
          <div
            className="container-fluid"
            style={{
              background: "#181818",
            }}
          >
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Channel?.avatar[1].url}
                  alt={Channel?.title}
                  style={{
                    borderRadius: "50%",
                    margin: "20px",
                    marginLeft: "0px",
                  }}
                />
                <div style={{ fontFamily: "Roboto" }}>
                  <h3 style={{ margin: 0, padding: 0 }}>{Channel?.title}</h3>
                  <p style={{ color: "grey", fontSize: "15px" }}>
                    {Channel?.stats.subscribersText}
                  </p>
                </div>
              </div>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#CC0000",
                  outline: "none",
                  padding: "10px 16px",
                  borderRadius: "2px",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                SUBSCRIBE
              </button>
            </div>
            <Stack
              className="container"
              direction="row"
              spacing={1}
              sx={{
                pr: 2,
                overflowX: "scroll",
              }}
            >
              {youtubeChannelPages.map((data, index) => (
                <Link to={`/channel/${id}/${data}`} key={index}>
                  <Typography
                    varient="h2"
                    color={test === data ? "white" : "#AAAAAA"}
                    borderBottom={test === data ? "3px solid #AAAAAA" : null}
                    py={2}
                    px={8}
                    textTransform="uppercase"
                  >
                    {data}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </div>
          <Outlet />
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="inherit" />
        </Box>
      )}
    </Stack>
  );
}

export default Main;
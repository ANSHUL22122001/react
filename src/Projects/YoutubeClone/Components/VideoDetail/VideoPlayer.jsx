import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function VideoPlayer(props) {
    const { videos } = props;
    return (
        <Stack
        flexDirection="column"
        sx={{
            overflowY: "auto",
        }}
        >
        <Box className="container">
        {videos?.map((item, index) => {
            return (
            <div key={index} style={{ marginTop: "20px" }}>
                {item.type === "video" ? (
                <VideoCard videos={item.video} />
                ) : (
                <ChannelCard channel={item.channel} />
                )}
            </div>
            );
        })}
        </Box>
        </Stack>
    );
}

export default VideoPlayer;

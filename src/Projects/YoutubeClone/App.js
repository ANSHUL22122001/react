import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, SearchFeed} from './Components';
import { Provider } from "react-redux";
import store from "./store";
import {
  Main,
  ChannelHome,
  ChannelPlaylists,
  ChannelVideos,
  ChannelAbout,
  OtherChannels,
} from "./Components";

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Box
            sx={{
              background: "rgba(33, 33, 33, 0.95)",
              color: "white",
            }}
          >
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<Main />}>
                <Route
                  path="/channel/:id/home"
                  exact
                  element={<ChannelHome />}
                />
                <Route
                  path="/channel/:id/videos"
                  exact
                  element={<ChannelVideos />}
                />
                <Route
                  path="/channel/:id/playlists"
                  exact
                  element={<ChannelPlaylists />}
                />
                <Route
                  path="/channel/:id/about"
                  exact
                  element={<ChannelAbout />}
                />
                <Route
                  path="/channel/:id/channel"
                  exact
                  element={<OtherChannels />}
                />
              </Route>
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Provider>
    );
}

export default App

// hover on component and ctrl + click
// hover on mui component and click on demo 
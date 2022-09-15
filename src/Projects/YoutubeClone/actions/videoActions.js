import {
  UPDATE_VIDEOS,
  SEARCHED_VIDEOS,
  CHANNEL_DETAILS,
  CHANNEL_VIDEOS,
  OTHER_CHANNELS,
} from "../actionTypes/actionType";


const updateVideos = (data) => {
  return {
    type: UPDATE_VIDEOS,
    data
  };
};
const searchedVideos = (data) => {
  return {
    type: SEARCHED_VIDEOS,
    data
  };
};
const channelDetails = (data) => {
  return {
    type: CHANNEL_DETAILS,
    data
  };
};
const channelVideos = (data) => {
  return {
    type: CHANNEL_VIDEOS,
    data
  };
};
const otherChannels = (data) => {
  return {
    type: OTHER_CHANNELS,
    data
  };
};


export {
  otherChannels,
  channelVideos,
  channelDetails,
  searchedVideos,
  updateVideos,
};
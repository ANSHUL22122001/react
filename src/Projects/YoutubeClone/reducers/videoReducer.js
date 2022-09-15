import {
    UPDATE_VIDEOS,
    SEARCHED_VIDEOS,
    CHANNEL_DETAILS,
    CHANNEL_VIDEOS,
    OTHER_CHANNELS
} from "../actionTypes/actionType";

const initialState = {
    defaultVideos: [],
    searchedVideos: [],
    channelVideos: [],
    channelDetails: null,
    otherChannels: []
};

const videoReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case UPDATE_VIDEOS:
      return {
        ...state,
        defaultVideos: action.data,
      };

    case SEARCHED_VIDEOS:
      return {
        ...state,
        searchedVideos: action.data,
      };
    case CHANNEL_DETAILS:
      return {
        ...state,
        channelDetails: action.data,
      };
    case CHANNEL_VIDEOS:
      return {
        ...state,
        channelVideos: action.data,
      };
    case OTHER_CHANNELS:
      return {
        ...state,
        otherChannels: action.data,
      };
    default:
      return state;
  }
};

export default videoReducer;
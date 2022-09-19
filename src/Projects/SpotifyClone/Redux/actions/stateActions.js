import {
  INITIALIZE_TOKEN,
  SET_PLAYLIST,
  SET_USERINFO,
} from "../actionTypes/actionType";

const initializeToken = (data) => {
  return {
    type: INITIALIZE_TOKEN,
    data,
  };
};

const setPlaylist = (data) => {
  return {
    type: SET_PLAYLIST,
    data,
  };
};

const setUserInfo = (data) => {
  return {
    type: SET_USERINFO,
    data,
  };
};

export { initializeToken, setPlaylist, setUserInfo };

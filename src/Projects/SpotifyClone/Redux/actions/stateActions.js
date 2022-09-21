import {
  INITIALIZE_TOKEN,
  SET_PLAYLIST,
  SET_USERINFO,
  SET_INITIALPLAYLIST,
  SET_SELECTEDPLAYLIST,
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

const setInitialPlaylist = (data) => {
  return {
    type: SET_INITIALPLAYLIST,
    data,
  };
};

const setSelectedPlaylist = (data) => {
  return {
    type: SET_SELECTEDPLAYLIST,
    data,
  };
};

export {
  initializeToken,
  setPlaylist,
  setUserInfo,
  setInitialPlaylist,
  setSelectedPlaylist,
};

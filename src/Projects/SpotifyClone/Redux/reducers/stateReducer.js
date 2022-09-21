import {
  INITIALIZE_TOKEN,
  SET_PLAYLIST,
  SET_USERINFO,
  SET_INITIALPLAYLIST,
  SET_SELECTEDPLAYLIST,
} from "../actionTypes/actionType";

const initialState = {
  TOKEN: null,
  userInfo: null,
  playlist: [],
  initialPlaylistId: null,
  selectedPlaylist:null
};

const stateReducer = (state = initialState, action) => {
  
    console.log(action.type, action.data);
    switch (action.type) {
      case INITIALIZE_TOKEN:
        return {
          ...state,
          TOKEN: action.data,
        };

      case SET_PLAYLIST:
        return {
          ...state,
          playlist: action.data,
        };
      case SET_USERINFO:
        return {
          ...state,
          userInfo: action.data,
        };
      case SET_INITIALPLAYLIST:
        return {
          ...state,
          initialPlaylistId: action.data,
        };
      case SET_SELECTEDPLAYLIST:
        return {
          ...state,
          selectedPlaylist: action.data,
        };
      default:
        return state;
    }
};

export default stateReducer;

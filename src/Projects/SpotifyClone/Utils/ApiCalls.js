import axios from "axios";
import {
  clientId,
  clientSecret,
} from "./Constants";

export const getToken = () => {
  try {
    return axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((data) => data.data.access_token);
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylist = (Token) => {
  try {
    return axios("https://api.spotify.com/v1/me/playlists", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token,
      },
      method: "GET",
    }).then((data) => data.data.items);
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = (Token) => {
  try {
    return axios("https://api.spotify.com/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token,
      },
      method: "GET",
    }).then((data) => {
      const { display_name, id, email } = data.data;
      return {display_name, id, email};
    });
  } catch (error) {
    console.log(error);
  }
};


export const getUserSelectedPlaylist = (Token, Id) => {
  try {
    if (!Id) {
      return null;
    }
    return axios(`https://api.spotify.com/v1/playlists/${Id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token,
      },
      method: "GET",
    })
      .then((data) => { 
        const {id, name, description, tracks, images} = data.data;
        return {
          id: id,
          name: name,
          description: description.startsWith("<a")
            ? ""
            : description,
          image: images[0].url,
          tracks: tracks.items.map(({ track }) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map((artist) => artist.name),
            image: track.album.images[2].url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number,
          }))
        }
      });
  } catch (error) {
    console.log(error);
  }
};

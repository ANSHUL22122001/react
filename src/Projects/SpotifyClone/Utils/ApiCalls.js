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
    console.log(Token);
    return axios(
      "https://api.spotify.com/v1/browse/categories?country=IN&offset=0&limit=20",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token,
        },
        method: "GET",
      }
    ).then((data) => data.data.categories.items);
  } catch (error) {
    console.log(error);
  }
};

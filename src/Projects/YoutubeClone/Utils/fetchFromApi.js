import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResults: "48" },
  headers: {
    "X-RapidAPI-Key": "666657f24fmsh5267d7960dfa02cp1023b7jsn3cdea49fe4ec",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

export const fetchChannelApi = async (url) => {
  const { data } = await axios.get(
    `https://youtube138.p.rapidapi.com/${url}`,
    {
      headers: {
        "X-RapidAPI-Key": "666657f24fmsh5267d7960dfa02cp1023b7jsn3cdea49fe4ec",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    }
  );
  // console.log("fetchChannelApi =>",data);
  return data;
}


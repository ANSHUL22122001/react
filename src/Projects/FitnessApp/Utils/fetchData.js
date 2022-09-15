const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "666657f24fmsh5267d7960dfa02cp1023b7jsn3cdea49fe4ec",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const fetchData = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  const data = await response.json();

  return data;
};

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export const clientId = "a3ba31dbaaee4c95945b9f75f2c3230f";
export const clientSecret = "16b4f1af22f44b6781ced00e915749bf";
export const redirectUrl = "http://localhost:3000/";
export const apiUrl = "https://accounts.spotify.com/authorize";
export const scope = [
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
];
export const BlackLogo =
  "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png";

export const WhiteLogo =
  "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png";

export const ListItems = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Search", icon: <SearchIcon /> },
  { name: "Home", icon: <LibraryBooksIcon /> },
];

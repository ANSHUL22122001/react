import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../../Utils/ApiCalls";

const Playlist = () => {
  const [Token, setToken] = useState(
    useSelector((state) => state.TOKEN)
  );

  useEffect(() => {
    const Playlist = async() => {
      const data = await getPlaylist(Token);
      console.log(data);
    }
    Playlist();
  }, [Token]);

  return (
    <div>Playlist</div>
  )
}

export default Playlist
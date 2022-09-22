import React, {useEffect, useState} from 'react';
import { styled } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../../Utils/ApiCalls";
import {
  setPlaylist,
  setInitialPlaylist,
} from "../../Redux/actions/stateActions";

const List = styled("ul")({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  height: "52vh",
  maxHeight: "100%",
  overflow: "auto",
  li: {
    display: "flex",
    gap: "1rem",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      color: "white",
    },
  },
  "&::-webkit-scrollbar": {
    width: "0.7rem",
    "&-thumb": {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
  }
});

const Playlist = () => {
  const token = useSelector((state) => state.TOKEN);
  const [newPlaylist, setNewPlaylist] = useState(
    useSelector((state) => state.playlist)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const Playlist = async() => {
      const data = await getPlaylist(token);
      await dispatch(setPlaylist(data));
      if (data.length > 0) {
        await dispatch(setInitialPlaylist(data[0].id));
      }
      else {
        await dispatch(setInitialPlaylist("37i9dQZF1EIWQ7iXYvVC5w"));
      }
      await setNewPlaylist(data);
    }
    Playlist();
  },[token, dispatch]);

  const changeCurrentPlaylist = (Id) => {
    dispatch(setInitialPlaylist(Id));
  }
  return (
    <List>
      {newPlaylist &&
        newPlaylist.map((data, index) => (
          <li key={index} onClick={() => changeCurrentPlaylist(data.id)}>
            <span>{data.name}</span>
          </li>
        ))}
    </List>
  );
}

export default Playlist
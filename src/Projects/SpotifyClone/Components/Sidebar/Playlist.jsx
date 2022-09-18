import React, {useEffect, useState} from 'react';
import { styled } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Utils/ApiCalls";
import { setCategories } from "../../Redux/actions/stateActions";

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
  const [category, setCategory] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    const Category = async() => {
      const data = await getCategories(token);
      await dispatch(setCategories(data));
      await setCategory(data);
      console.log(data);
    }
    Category();
  },[token, dispatch]);

  return (
    <List>
      {category.map((data, index) => (
        <li key={index}>
          <span>{data.name}</span>
        </li>
      ))}
    </List>
  );
}

export default Playlist
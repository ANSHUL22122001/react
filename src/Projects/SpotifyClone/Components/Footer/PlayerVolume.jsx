import React from 'react'
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { changeVolume } from "../../Utils/ApiCalls";

const PlayerVolume = () => {
  const token = useSelector((state)=>state.TOKEN)
  const setVolume = async (e) => {
    console.log(e.target.value, token)
    await changeVolume(e.target.value, token);
  };
  return (
    <Container>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  );
}
const Container = styled("div")({
display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
  input: {
    width: '15rem',
    borderRadius: '2rem',
    height: '0.5rem',
  }
})
  

export default PlayerVolume
import React from "react";
import { styled } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import axios from "axios";
import { getTrack } from "../../Utils/ApiCalls";
import {
  setCurrentlyPlaying,
  setPlayerState,
} from "../../Redux/actions/stateActions";


const PlayerControls = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.TOKEN);
  const playerState = useSelector((state) => state.playerState);
  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    dispatch(setPlayerState(!playerState));
  };
  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await getTrack(token);
    await dispatch(setCurrentlyPlaying(data));
  }
  return (
    <Container>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={() => changeTrack("prev")} />
      </div>
      <div className="state">
        {playerState ? <BsFillPauseCircleFill onClick={changeState} /> : <BsFillPlayCircleFill onClick={changeState} />}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
    </Container>
  );
};

const Container = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyCenter: 'center',
  gap: '2rem',
  svg: {
    color: '#b3b3b3',
    transition: '0.2s ease-in-out',
    "&:hover": {
      color: 'white'
    }
  },
  ".state": {
    svg: {
      color: 'white'
    }
  },
  ".previous, .next, .state": {
    fontSize: '2rem'
  }
});

export default PlayerControls;

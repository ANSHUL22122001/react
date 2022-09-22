import React from 'react';
import { styled } from '@mui/system';
import CurrentTrack from './CurrentTrack';
import PlayerControls from "./PlayerControls";
import PlayerVolume from "./PlayerVolume";

const SpotifyFooter = styled('div')({
  backgroundColor: '#181818',
  height: '100%',
  width: '100%',
  borderTop: '1px solid #282828',
  display: 'flex',
  girdTemplateColumns: '1fr 2fr 1fr',
  justifyContent:'space-between',
  alignItems: 'center',
  padding: '0 1rem',
});

const Footer = () => {
  return (
    <SpotifyFooter>
      <CurrentTrack />
      <PlayerControls />
      <PlayerVolume />
    </SpotifyFooter>
  );
}

export default Footer
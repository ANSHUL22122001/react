import React from 'react';
import { styled } from '@mui/system';

const SpotifyFooter = styled('div')(({ theme }) => ({
  backgroundColor: '#181818',
  height:'100%'
}));

const Footer = () => {
  return (
    <SpotifyFooter>Footer</SpotifyFooter>
  )
}

export default Footer
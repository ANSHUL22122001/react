import React from 'react';
import { styled } from '@mui/system';

const SpotifyFooter = styled('div')(({ theme }) => ({
  backgroundColor: '#181818',
  height: '100%',
  width: '100%',
  borderTop: '1px solid #282828',
  display: 'grid',
  girdTemplateColumns: '1fr 2fr 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1rem',
}));

const Footer = () => {
  return (
    <SpotifyFooter>Footer</SpotifyFooter>
  )
}

export default Footer
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Footer } from './Components';
import { Home, ExerciseDetail } from "./Pages";
import './App.css';


function App() {
    return (
      <BrowserRouter>
        <Box
          width="400px"
          m="auto"
          sx={{
            width: {
              xl: "1488px",
            },
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    );
}

export default App
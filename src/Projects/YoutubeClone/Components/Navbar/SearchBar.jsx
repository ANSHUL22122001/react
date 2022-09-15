import React, {useEffect, useState} from 'react';
import { Paper, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Search } from '@mui/icons-material';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displaySearch, setDisplaySearch] = useState(true);
  
  useEffect(() => {
    window.addEventListener(
      "resize",
      ()=>setDisplaySearch(window.innerWidth > 700)
    );
  })
    

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);   
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      elevation={0}
      onSubmit={handleSubmit}
      style={{
        border: "2px solid hsl(0, 0%, 18.82%)",
        boxShadow: "none",
        background: "hsl(0, 0%, 7%)",
        width: `${ displaySearch ? "40%" : "auto" }`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {
        displaySearch ?
          <input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              flex: 0.95,
              color: "white",
              background: "transparent",
            }}
          /> : null
      }
      
      <Button
        variant="contained"
        color="error"
        type="submit"
        sx={{
          borderRadius: 0,
          border: "none",
          outline: "none",
          flex: 0.05,
          m: "0.3px",
          color: "white",
          background: "hsla(0, 0%, 100%, 0.08)",
        }}
      >
        <Search />
      </Button>
    </Paper>
  );
}

export default SearchBar
import React from 'react';
import { suggestions } from "../../Utils/Constants";
import { Stack } from "@mui/material";

function Suggestion(props) {
  const {setSelectedCategory} = props
  return (
    <Stack
      direction="row"
      sx={{
        background: "rgba(33, 33, 33, 0.95)",
        overflowX: "scroll",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
        width: "100%",
      }}
    >
      {suggestions.map((suggestion, index) => (
        <button
          style={{
            color: "white",
            background: "#FFFFFF1A",
            border: "none",
            borderRadius: "30px",
            fontSize: "13px",
            margin: "10px",
            padding: "5px 15px",
            cursor: "pointer",
          }}
          key={index}
          onClick={() => setSelectedCategory(suggestion.name)}
        >
          {suggestion.name}
        </button>
      ))}
    </Stack>
  );
}

export default Suggestion
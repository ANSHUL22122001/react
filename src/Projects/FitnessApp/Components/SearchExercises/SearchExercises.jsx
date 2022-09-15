import React, {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData } from './../../Utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('bodyPartList');
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(`exercises`);
      const searchedExercises = exercisesData.filter((exercise) => (
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      ));
      setSearch("");
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          }
        }}
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "40px",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "white",
            height: "56px",
            position: "absolute",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px'
        }}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      </Box>
    </Stack>
  );
}

export default SearchExercises
import React from 'react';
import { Box } from '@mui/material';



function HorizontalScrollbar({data}) {
    return (
        <div>
            {data.map((item, index) => (
                <Box key={index}>

                </Box>
            ))}
        </div>
    )
}

export default HorizontalScrollbar
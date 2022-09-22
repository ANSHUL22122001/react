import React, { useEffect } from "react";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getTrack } from "../../Utils/ApiCalls";
import { setCurrentlyPlaying } from "../../Redux/actions/stateActions";

const CurrentTrack = () => {
    const token = useSelector((state) => state.TOKEN);
    const currentlyPlaying = useSelector((state) => state.currentlyPlaying);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCurrentTrack = async () => {
            const data = await getTrack(token);
            await dispatch(setCurrentlyPlaying(data));
        };
        getCurrentTrack();
    }, [token, dispatch]);

    return (
        <Container>
            {currentlyPlaying && (
                <div className="track">
                    <div className="TrackImage">
                        <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                    </div>
                    <div className="TrackInfo">
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists.join(", ")}</h6>
                    </div>
                </div>
            )}
        </Container>
    );
};

const Container = styled("div")({
    ".track": {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        ".TrackInfo": {
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            h4: {
                color: "white",
            },
            h6: {
                color: "#b3b3b3",
            },
        },
    },
});
export default CurrentTrack;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getUserSelectedPlaylist } from "../../Utils/ApiCalls";
import { setSelectedPlaylist } from "../../Redux/actions/stateActions";

const Body = () => {
  const token = useSelector((state) => state.TOKEN);
  const [selectedPlaylistData, setSelectedPlaylistData] = useState(null);
  const dispatch = useDispatch();
  const initialPlaylistId = useSelector((state) => state.initialPlaylistId);

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const data = await getUserSelectedPlaylist(token, initialPlaylistId);
      if (data == null) {
        return;
      }
      await dispatch(setSelectedPlaylist(data));
      await setSelectedPlaylistData(data);
    };
    getInitialPlaylist();
  }, [token, initialPlaylistId, dispatch]);

  const msToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <BodyContainer>
      {selectedPlaylistData ? (
        <>
          <div className="playlist">
            <div className="image">
              <img src={selectedPlaylistData.image} alt="selectedplaylist" />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{selectedPlaylistData.name}</h1>
              <p className="description">{selectedPlaylistData.description}</p>
            </div>
          </div>
          <div className="list">
            <div className="header-row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>

            <div className="tracks">
              {selectedPlaylistData.tracks.map(
                (
                  {
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    contextUrl,
                    trackNumber,
                  },
                  index
                ) => {
                  return (
                    <div className="row" key={id}>
                      <div className="col">
                        <span>{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          <img src={image} alt="track" />
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          <span>{artists}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{album}</span>
                      </div>
                      <div className="col">
                        <span>{msToMinutesAndSeconds(duration)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      ) : null}
    </BodyContainer>
  );
};


  const BodyContainer = styled.div`
    .playlist {
      margin: 0 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      .image {
        img {
          height: 15rem;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #e0dede;
        .title {
          color: white;
          font-size: 4rem;
        }
      }
    }
    .list {
      .header-row {
        display: grid;
        grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
        margin: 1rem 0 0 0;
        color: #dddcdc;
        position: sticky;
        top: 15vh;
        padding: 1rem 3rem;
        transition: 0.3s ease-in-out;
        background-color: #000
      }
      .tracks {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 5rem;
        .row {
          padding: 0.5rem 1rem;
          display: grid;
          grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
          &:hover {
            background-color: rgba(0, 0, 0, 0.7);
          }
          .col {
            display: flex;
            align-items: center;
            color: #dddcdc;
            img {
              height: 40px;
              width: 40px;
            }
          }
          .detail {
            display: flex;
            gap: 1rem;
            .info {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  `;

export default Body;

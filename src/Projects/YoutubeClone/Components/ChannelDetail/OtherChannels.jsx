import React from "react";

import Grid from "@mui/material/Grid";

import { Channel } from "../../Utils/Constants";

function OtherChannels() {
  const { otherChannels } = Channel;
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div style={{ padding: "20px 30px" }}>
        <h4>All Channels</h4>
        <Grid container>
          {otherChannels.map((data, index) => {
            return (
              <Grid
                item
                lg={3}
                md={6}
                sm={12}
                key={index}
                sx={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <center style={{ marginTop: "20px" }}>
                  <img
                    src={data.channel.avatar[2].url}
                    alt={data.channel.title}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <h5 style={{ marginTop: "10px" }}>{data.channel.title}</h5>
                  <p style={{ color: "grey" }}>
                    {data.channel.stats.subscribersText}
                  </p>
                  <button className="btn btn-danger">Subscribe</button>
                </center>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default OtherChannels;

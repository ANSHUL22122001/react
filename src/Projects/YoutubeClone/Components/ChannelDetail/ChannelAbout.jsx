import React from 'react';
import { useSelector} from "react-redux";


function ChannelAbout() {
    const Channel = useSelector((state) => state.channelDetails)
    
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        {Channel ? (
          <div className="d-flex justify-content-start">
            <div style={{ flex: "0.7", padding: "20px 30px" }}>
              <h4>Description</h4>

              <p style={{ padding: "30px 2px" }}>{Channel?.description}</p>
              <hr />
              {Channel?.links?.map((data, index) => {
                const { targetUrl, title } = data;
                return (
                  <a
                    href={targetUrl ? targetUrl : "#"}
                    key={index}
                    style={{
                      color: "blue",
                      display: "block",
                      textDecoration: "underline",
                    }}
                  >
                    {title}
                  </a>
                );
              })}
            </div>
            <div style={{ flex: "0.3", padding: "20px 30px" }}>
              <h4>Stats</h4>
              <hr />
              <h6>{Channel?.joinedDateText}</h6>
              <hr />
              <h6>{`${Channel?.stats?.views} views`}</h6>
              <hr />
            </div>
          </div>
        ) : null}
      </div>
    );
}

export default ChannelAbout
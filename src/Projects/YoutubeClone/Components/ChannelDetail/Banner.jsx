import React from 'react'

function Banner(props) {
    const { image } = props.data;
    return (
        <img
          src={image.bannerExternalUrl}
          alt=""
          style={{
              width: "100%",
              height: "20%"
          }}
        />
    );
}

export default Banner
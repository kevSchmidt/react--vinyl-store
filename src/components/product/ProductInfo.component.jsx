import React from "react";
import Tilt from "react-tilt";

import "./ProductInfo.styles.scss";

const ProductInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id === props.id);

  const moreInfo = selectedItem.map((item) => {
    const {
      id,
      albumName,
      albumArtist,
      albumYear,
      albumImg2,
      price,
      inventory,
      shape,
    } = item;

    return (
      <div key={id} className="product-info__card">
        {/* ======== Album Header ==== */}
        <h2 className="product-info__card--title">
          {albumArtist} - {albumName} ({albumYear})
        </h2>

        {/* ======== Album Information === */}
        <span className="product-info__card--price"> Price: {price} € </span>
        <span className="product-info__card--quality">Quality: {shape}</span>
        <span className="product-info__card--inventory">
          Only {inventory} remaining!
        </span>

        {/* ===== Album Animation */}
        <div className="white-bg">
          <Tilt className="Tilt" options={{ max: 35 }}>
            <img
              src={albumImg2}
              alt="poster"
              className="product-info__card--poster"
            />
          </Tilt>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h1 className="section-title">MORE INFOS</h1>
      <div className="product-info"> {moreInfo} </div>
    </React.Fragment>
  );
};

export default ProductInfo;

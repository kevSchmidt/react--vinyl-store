import React from "react";
import { Link } from "react-router-dom";

import "./Product.styles.scss";

const Product = (props) => {
  const items = props.data.map((item) => {
    const { id, albumName, albumImg } = item;

    return (
      <Link to={`/product/${id}`}>
        <div key={id} className="product__card">
          <img src={albumImg} alt="poster" className="product__card--poster" />
          <div className="product__card--title">{albumName}</div>
        </div>
      </Link>
    );
  });

  return (
    <React.Fragment>
      <div className="product">{items}</div>
    </React.Fragment>
  );
};

export default Product;

import React from "react";

import "./Home.styles.scss";

const Home = () => {
  return (
    <div className="background-video">
      {/* ======== Video Background === */}
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        src="./images/video-vinyl-1.mp4"
        className="video"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* ======== Video Overlay === */}
      <div className="video-overlay-container">
        <h1 className="video-overlay"> Vinyl Record Shop</h1>
        <h4 className="video-overlay-sub"> Vintage and authentic </h4>
      </div>
    </div>
  );
};

export default Home;

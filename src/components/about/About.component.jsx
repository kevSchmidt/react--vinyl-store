import React from "react";

import "./About.styles.scss";

const About = () => {
  return (
    <React.Fragment>
      <section
        className="about"
        style={{ background: "url(./images/vinyl-bg.jpg)" }}
      >
        <h1 className="about__title">About our store</h1>
        <div className="about-flex-container">
          <div className="about__info">
            <h2 className="about__info--title">Quality is important!</h2>
            <p className="about__info--text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              odio quasi corrupti nisi, voluptates veniam asperiores
              perferendis. <br />
              Iste, quisquam cumque. Recusandae consectetur minus optio iste
              itaque ut sunt dolores numquam commodi, ipsum cumque dicta,
              placeat nisi? Laborum doloremque aut necessitatibus adipisci
              facilis culpa sint, ab ad.
            </p>
            <div className="about__info--review">
              MARTIN: "Lorem ipsum dolor , adipisicing elit. Iste tempore
              laborum aperiam." <br />
              LISA: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Vel, soluta atque ad quo quis rem reprehenderit." <br />
              LUKAS: "Lorem ipsum dolor sit amet!"
            </div>
          </div>

          <div className="about__contact">
            <h2 className="about__contact--title">CONTACT US</h2>
          </div>
        </div>

        <div className="about__social-media">
          <p>ADD ICONS HERE</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;

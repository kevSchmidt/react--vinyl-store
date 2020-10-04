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
              With today’s shrinking budgets, home studios and self-taught
              engineers, the probability of an exceptional recording using
              exceptional equipment is lower than ever. <br />A pressing machine
              operator installs the stamper onto a huge machine that drops
              goobers of vinyl onto the metal plates and then squeezes them
              together just like you’d make waffles. If dust hasn’t found a way
              in and the vinyl releases cleanly from the metal stampers, we may
              have an excellent sounding vinyl LP on our hands.
            </p>

            <div className="about__info--review">
              Customers review: <br /> Laurence: "Ordered and delivered in quick
              time. Item was as pictured. Very happy." <br />
              Lisa: "Recently order Rumors and very pleased with how it looks
              and quick delivery. Definitely will consider these for gifts."
              <br />
              Lukas: "Love, love, love this company! Great quality, great
              customer service!" <br />
              Eloise: "Excellent service, thanks guys." <br />
              Mika: "Just what I needed to make the Afro for my parents 50th
              anniversary party! Soul train was our theme. The 70’s"
            </div>
          </div>

          <div className="about__vinyl">
            <h2 className="about__vinyl--title">WHY VINYLS</h2>
            <p className="about__vinyl--text">
              Most of the music is broadcast in some lossy format, where details
              are missed, and the overall quality is reduced. It happens because
              audio files get compressed to make them small enough to store
              thousands of them on the phone, and to stream online. Regardless
              whether you listen to music on a streaming service like Apple
              Music or prefer MP3s or even the radio, you can't get the full
              picture of that track. Vinyl is far more high-quality. No audio
              data is lost when pressing a record. It sounds just as great as
              the producer or band intended.
            </p>
          </div>
        </div>

        {/* ======== Footer === */}
        <div className="about__social-media">
          <p>ADD ICONS HERE</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;

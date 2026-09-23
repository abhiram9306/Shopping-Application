import React from 'react';

const Banner = () => {
  return (
    <section className="hero">

      <div className="heroContent">

        <p className="heroSmallText">
          NEW SEASON COLLECTION
        </p>

        <h1>
          Elevate Your
          <br />
          Everyday Style
        </h1>

        <p className="heroDescription">
          Discover premium fashion, accessories and
          lifestyle essentials curated just for you.
        </p>

        <div className="heroButtons">

          <button className="primaryBtn">
            Shop Now
          </button>

          <button className="secondaryBtn">
            Explore Collection
          </button>

        </div>

      </div>


      <div className="heroImage">

        <div className="heroCircle">

          <span>NEW</span>

          <strong>
            COLLECTION
          </strong>

        </div>

      </div>

    </section>
  );
};

export default Banner;
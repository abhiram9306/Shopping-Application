import React, { useEffect, useState } from 'react';

const DealOfHour = () => {

  const [time, setTime] = useState(8 * 60 * 60);

  useEffect(() => {

    const timer = setInterval(() => {

      setTime((prevTime) => {

        if (prevTime <= 0) {
          return 8 * 60 * 60;
        }

        return prevTime - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);


  const hours = Math.floor(time / 3600);

  const minutes = Math.floor((time % 3600) / 60);

  const seconds = time % 60;


  return (
    <section className="dealSection">

      <div className="dealContent">

        <div className="dealLabel">
          DEAL OF THE HOUR
        </div>

        <h2>
          50-70% OFF
        </h2>

        <p>
          Limited time deals on selected
          fashion and lifestyle products.
        </p>

        <div className="dealTimer">

          <div className="timerBox">
            <strong>
              {String(hours).padStart(2, '0')}
            </strong>
            <span>Hours</span>
          </div>

          <div className="timerBox">
            <strong>
              {String(minutes).padStart(2, '0')}
            </strong>
            <span>Minutes</span>
          </div>

          <div className="timerBox">
            <strong>
              {String(seconds).padStart(2, '0')}
            </strong>
            <span>Seconds</span>
          </div>

        </div>

        <button className="dealButton">
          SHOP NOW
        </button>

      </div>


      <div className="dealImage">

        <img
          src="/images/shoes.jpg"
          alt="Deal of the Hour"
        />

      </div>

    </section>
  );
};

export default DealOfHour;
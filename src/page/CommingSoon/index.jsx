import React, { useEffect, useState } from 'react';

function CommingSoon({day, hours, minute, second}) {

    // let [time, setTime] = useState((1*24 + 5)*60*60 + 1800);
    // //  let [time, setTime] = useState(5);

    //  useEffect(() => {
    //     let timeInterval = setInterval(() =>{
    //         if(time === 0){
    //             return clearTimeout(timeInterval);
    //         }
    //         setTime(--time);
    //     },1000)
    // })

    // let day = parseInt(time / 60 / 60 / 24);
    // let hours = parseInt((time / 60 / 60 ) - (day*24));
    // let minute = parseInt((time/60 - (day*24 + hours)*60));
    // let second = time % 60;


    return (
   <div>
  <nav className="navbar navbar-expand navbar-dark @@classList">
    <div className="container">
      {/* Brand */}
      <a className="navbar-brand" href="./overview.html">
        Shopper.
      </a>
      {/* Nav */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#!">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li className="nav-item ml-n4">
          <a className="nav-link" href="#!">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className="nav-item ml-n4">
          <a className="nav-link" href="#!">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li className="nav-item ml-n4">
          <a className="nav-link" href="#!">
            <i className="fab fa-medium" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/* CONTENT */}
  <section className="bg-cover" style={{marginTop: '-90px', backgroundImage: 'url(/img/covers/cover-22.jpg)'}}>
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center min-vh-100 pt-13 pb-12">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-white">
          {/* Heading */}
          <h1>We are Coming Soon</h1>
          {/* Text */}
          <p className="mb-9 font-size-lg">
            Our team have been working on somesing amazing.
          </p>
          {/* Counter */}
          <div className="d-flex justify-content-center mb-10" data-countdown data-date="Jan 5, 2021 15:37:25">
            <div className="text-center">
              <div className="font-size-h1 font-weight-bolder" data-days>{day}</div>
              <div className="heading-xxs">Days</div>
            </div>
            <div className="px-1 px-md-4">
              <div className="font-size-h2 font-weight-bolder">:</div>
            </div>
            <div className="text-center">
              <div className="font-size-h1 font-weight-bolder" data-hours>{hours.toString().padStart(2, '0')}</div>
              <div className="heading-xxs">Hours</div>
            </div>
            <div className="px-1 px-md-4">
              <div className="font-size-h2 font-weight-bolder">:</div>
            </div>
            <div className="text-center">
              <div className="font-size-h1 font-weight-bolder" data-minutes>{minute.toString().padStart(2, '0')}</div>
              <div className="heading-xxs">Minutes</div>
            </div>
            <div className="px-1 px-md-4">
              <div className="font-size-h2 font-weight-bolder">:</div>
            </div>
            <div className="text-center">
              <div className="font-size-h1 font-weight-bolder" data-seconds>{second.toString().padStart(2, '0')}</div>
              <div className="heading-xxs">Seconds</div>
            </div>
          </div>
          {/* Form */}
          <form>
            <div className="form-row">
              <div className="col-12 col-md">
                {/* Input */}
                <div className="form-group mb-md-0">
                  <label className="sr-only" htmlFor="comingSoonEmail" />
                  <input className="form-control form-control-dark" id="comingSoonEmail" type="email" placeholder="Enter Email *" />
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Button */}
                <button className="btn btn-dark" type="submit">
                  Notify me!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}

export default CommingSoon;
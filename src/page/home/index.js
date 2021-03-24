import React from 'react';
import Banner from './components/Banner';
import Features from './components/Features';
import Pick from './components/Pick';
import TopSell from './components/TopSell';
import Countdown from './components/Countdown';
import Review from './components/Review';
import Brand from './components/Brand';
import withCountDown from '../../hoc/withCountDown';
import WithCountDown from '../../hoc/withCountDown';

export default function Home() {
  return (
    <>
      <Banner />
      {/* FEATURES */}
      <Features />
      {/* BEST PICKS */}
      <Pick />
      {/* TOP SELLERS */}
      <TopSell />
      {/* COUNTDOWN */}
      {/* <Countdown /> */}
      {/* {withCountDown(Countdown, (1 * 24 + 5) * 60 * 60 + 1800)} */}
      <WithCountDown WrapComponent={Countdown} timeCountDown={(1 * 24 + 5) * 60 * 60 + 1800} />
      {/* REVIEWS */}
      <Review />
      {/* BRANDS */}
      <Brand />
    </>
  )
}

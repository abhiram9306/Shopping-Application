import React from 'react';

import Header from '../components/Header';
import DealOfHour from '../components/DealOfHour';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />

      <DealOfHour />

      <Banner />

      <Collections />

      <Footer />
    </div>
  );
};

export default MainPage;
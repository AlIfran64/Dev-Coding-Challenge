import React from 'react';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Banner from '../../Components/Header/Banner/Banner';
import CompanyStats from '../../Components/CompanyStats/CompanyStats';
import GiveUsAShot from '../../Components/GiveUsAShot/GiveUsAShot';

const Homepage = () => {
  return (
    <div>
      {/* Header start */}

      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>

      {/* Header end */}

      {/* Main start */}

      {/* Company statistics */}
      <CompanyStats></CompanyStats>
      {/* Give us a shot section */}
      <GiveUsAShot></GiveUsAShot>

      {/* Main end */}
    </div>
  );
};

export default Homepage;
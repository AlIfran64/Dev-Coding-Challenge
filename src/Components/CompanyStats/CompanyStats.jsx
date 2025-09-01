import React from 'react';
import boltshift from '../../assets/boltshift.png';
import featherdev from '../../assets/featherdev.png';
import globalbank from '../../assets/global bank.png';
import lightbox from '../../assets/lightbox.png';
import nietzsche from '../../assets/Nietzsche.png';
import spherule from '../../assets/spherule.png';

const CompanyStats = () => {
  return (
    <div className='w-11/12 mx-auto my-25'>
      <h1 className='text-center text-base text-[#475467]'>Join 4,000+ companies already growing</h1>

      {/* Company's */}
      <div className='grid grid-cols-6 gap-8 place-items-center mt-8'>
        {/* Company: Boltshift */}
        <div>
          <img src={boltshift} alt="Boltshift logo" />
        </div>

        {/* Company: Lightbox */}
        <div>
          <img src={lightbox} alt="Lightbox logo" />
        </div>

        {/* Company: FeatherDev */}
        <div>
          <img src={featherdev} alt="FeatherDev logo" />
        </div>

        {/* Company: Spherule */}
        <div>
          <img src={spherule} alt="Spherule logo" />
        </div>

        {/* Company: GlobalBank */}
        <div>
          <img src={globalbank} alt="GlobalBank logo" />
        </div>

        {/* Company: Nietzsche */}
        <div>
          <img src={nietzsche} alt="Nietzsche logo" />
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
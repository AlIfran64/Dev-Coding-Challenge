import React from 'react';

const CompanyStats = () => {
  return (
    <div className='w-11/12 mx-auto my-25'>
      <h1 className='text-center text-base text-[#475467]'>Join 4,000+ companies already growing</h1>

      {/* Company's */}
      <div>
        {/* Company: Boltshift */}
        <div>
          <img src={boltshift} alt="company: Boltshift" />
        </div>

        {/* Company: Lightbox */}
        <div>
          <img src={lightbox} alt="company: Lightbox" />
        </div>

        {/* Company: FeatherDev */}
        <div></div>

        {/* Company: Spherule */}
        <div></div>

        {/* Company: GlobalBank */}
        <div></div>

        {/* Company: Nietzsche */}
        <div></div>
      </div>
    </div>
  );
};

export default CompanyStats;
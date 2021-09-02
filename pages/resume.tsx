import React from 'react';

const resume = () => {
  return (
    <div className='p-4'>
      {/* education and experience */}
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-gray-300 pb-3 px-3 rounded-md '>
          <h5 className='text-2xl font-bold my-3'>Education</h5>
          <div className='bg-gray-100 py-2 px-3 rounded-md'>
            <h5 className='text-xl font-semibold'>BA (Honours)</h5>
            <p className='text-lg my-1 '>
              Kazi Azim Uddind College and University
            </p>
            <p className='text-sm text-gray-500'>Department of Bangla</p>
          </div>
        </div>
        {/* experience */}
        <div className='bg-gray-300 pb-3 px-3 rounded-md '>
          <h5 className='text-2xl font-bold my-3'>Experience</h5>
          <div className='bg-gray-100 py-2 px-3 rounded-md'>
            <h5 className='text-xl font-semibold'>Internship</h5>
            <p className='text-lg my-1 '>Tata Consultanc Services</p>
          </div>
        </div>
      </div>

      {/* education and experience end*/}
      {/* languages and tool */}
      

      {/* languages and tool end */}
    </div>
  );
};

export default resume;

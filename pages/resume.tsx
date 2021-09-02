import React from 'react';
import SkillCard from '../components/SkillCard';
import { languages, Tool } from '../data';

const resume = () => {
  return (
    <div className='p-4'>
      {/* education and experience */}
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-gray-300  dark:bg-gray-400 dark:text-white pb-6 px-3 rounded-md '>
          <h5 className='text-2xl font-bold my-3'>Education</h5>
          <div className='bg-gray-100 dark:text-gray-800  py-2 px-3 rounded-md'>
            <h5 className='text-xl font-semibold'>BA (Honours)</h5>
            <p className='text-lg my-1 '>
              Kazi Azim Uddind College and University
            </p>
            <p className='text-sm text-gray-500'>Department of Bangla</p>
          </div>
        </div>
        {/* experience */}
        <div className='bg-gray-300 dark:bg-gray-400 dark:text-white pb-3 px-3 rounded-md '>
          <h5 className='text-2xl font-bold my-3'>Experience</h5>
          <div className='bg-gray-100 dark:text-gray-800 py-2 px-3 rounded-md'>
            <h5 className='text-xl font-semibold'>Internship</h5>
            <p className='text-lg my-1 '>Tata Consultanc Services</p>
          </div>
        </div>
      </div>

      {/* education and experience end*/}
      {/* languages and tool */}
      <div className='grid grid-cols-2 gap-6 md:mt-16'>
        <div className='md:col-span-1 col-span-2'>
          <h1 className='lg:text-3xl md:text-xl font-semibold my-1'>
            Languages & Framework
          </h1>
          {languages.map(language => (
            <SkillCard data={language} key={language.name} />
          ))}
        </div>

        <div className='md:col-span-1 col-span-2'>
          <h1 className='lg:text-3xl md:text-xl font-semibold my-1'>
            Tool & Software
          </h1>
          {Tool.map(tool => (
            <SkillCard data={tool} key={tool.name} />
          ))}
        </div>
      </div>

      {/* languages and tool end */}
    </div>
  );
};

export default resume;

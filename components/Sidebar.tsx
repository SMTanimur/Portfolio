import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import userImg from '../public/img.jpg';
import { GrLocation } from 'react-icons/gr';
import { FaFacebookSquare, FaTwitterSquare, FaGithub } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-center py-32  space-y-3 shadow-lg'>
      <Image
        src={userImg}
        width={100}
        height={100}
        className='rounded-full'
        alt=''
      />
      <h3 className='my-4 text-center lg:text-3xl md:text-xl font-medium tracking-wider text-gray-700 font-kaushan'>
        <span className='text-green-500'>Tanimur </span>Rahman
      </h3>
      <p className='w-11/12 px-2 py-1 text-center bg-gray-200 rounded-full my3'>
        Web developer
      </p>
      <p className='w-11/12 px-2 py-1 text-center bg-gray-200 rounded-full my3'>
        Download Resume
      </p>
      {/* social icon */}
      <div className='flex justify-around space-x-10 text-3xl text-green-400'>
        <Link href='https://m.facebook.com/profile.php?ref=bookmarks'>
          <a>
            <FaFacebookSquare />
          </a>
        </Link>
        <Link href='@Mushfiq76249606'>
          <a>
            <FaTwitterSquare />
          </a>
        </Link>
        <Link href='https://github.com/MushfiqurRahmanTanim'>
          <a>
            <FaGithub />
          </a>
        </Link>
      </div>
      {/* address */}
      <div className='flex flex-col w-full gap-2 py-6 my-5 bg-black bg-opacity-10'>
        <div className='flex items-center justify-center gap-1'>
          <GrLocation />
          <p>Dhaka,Bangladesh</p>
        </div>
        <p className='text-center'>smtanimurrahman@gmail.com</p>
        <p className='text-center'>0168584..../013848.....</p>
      </div>
      {/* email button */}
      <button
        className='w-1/2 px-2 py-2 text-lg text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto:smtanimurrahman@gmail.com')}
      >
        Email me
      </button>
      <button className='w-1/2 px-2 py-2 text-lg text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>
        Light UI
      </button>
    </div>
  );
};

export default Sidebar;

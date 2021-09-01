import React, { useEffect, useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

const NavbarItem: FunctionComponent<{
  activeItem: string;
  name: string;
  setActiveItem: Function;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    activeItem !== name && (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className="hover:text-green-400 transition">{name}</span>
        </a>
      </Link>
    )
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/project') setActiveItem('Project');
    if (pathname === '/resume') setActiveItem('Resume');
  }, [pathname]);

  return (
    <div className=' flex justify-between px-5 py-3'>
      <span className='font-bold text-green-400 text-xl border-b-4 border-green-400'>{activeItem}</span>
      <div className='text-gray-700  text-lg flex space-x-5'>
        <NavbarItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        />
        <NavbarItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavbarItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default Navbar;

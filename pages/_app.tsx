import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='grid h-full grid-cols-12 gap-6 px-5  my-14 container mx-auto sm:px-11 md:px-4 '>
        <div className='col-span-12 bg-white rounded-2xl lg:col-span-3'>
          <Sidebar />
        </div>
        <div className='col-span-12  bg-white rounded-2xl lg:col-span-9 flex flex-col overflow-hidden'>
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

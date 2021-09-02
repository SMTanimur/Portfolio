import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='bg-fixed flex flex-grow pb-10 bg-gradient-to-r from-green-400 to-purple-500 dark:from-gray-800 dark:to-gray-900 dark:text-white'>
        <div className='grid h-full grid-cols-12 gap-6 px-5  my-14 container mx-auto sm:px-11 md:px-4'>
          <div className='col-span-12 bg-gray-300 dark:bg-gray-700 overflow-hidden rounded-2xl lg:col-span-3'>
            <Sidebar />
          </div>
          <div className='col-span-12  bg-white dark:bg-gray-700 rounded-2xl lg:col-span-9 flex flex-col overflow-hidden'>
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

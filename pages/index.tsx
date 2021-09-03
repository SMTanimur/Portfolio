import ServicesCard from '../components/ServicesCard';
import { services } from '../data';

export default function Home() {
  return (
    <div className='flex flex-col px-5 pt-1  flex-grow '>
      <h5 className='my-3 font-medium'>
        Hello! I am Tanim, a passionate self-taught Full Stack developer from
        Bangladesh. I build things for the web and mobile. I develop web
        applications, mobile applications and desktop applications. Passionate
        about new technologies and problem-solving. I am available for any kind
        of job opportunity that suits my interests
      </h5>
      <div className='p-4 mt-5 bg-gray-400  -ml-5 -mr-5 flex-grow'>
        <h1 className='my-3 text-xl font-bold text-green-600'>
          What I am doing
        </h1>

        <div className='grid lg:grid-cols-2 gap-6 lg:mt-20'>
          {services.map((service, index) => (
            <div
              key={index}
              className='lg:col-span-1 bg-gray-200 dark:bg-gray-700 rounded-lg'
            >
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

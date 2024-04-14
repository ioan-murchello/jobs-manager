import { Link, Outlet } from 'react-router-dom';

import logo from '../assets/logo.svg';

const Landing = () => {
  return (
    <main className='flex justify-center container mx-auto min-h-[100vh]  sm:pt-8 p-[40px] items-start flex-col gap-y-8'>
      <nav>
        <div className='bg-indigo-500 p-3 text-xl text-white rounded-xl'>
          JobbsManager
        </div>
      </nav>
      <div className='grid place-items-center grid-cols-1 md:grid-cols-2'>
        <div className='grid justify-start px-5 flex-col gap-y-4 '>
          <h1 className='text-3xl capitalize font-bold'>
            jobs <span>tracking </span>
            app
          </h1>
          <p>
            Streamline your job search with our comprehensive Jobs Tracing App.
            Whether you're hunting for your dream career or seeking part-time
            opportunities, our platform offers intuitive tools to track
            applications, manage interviews, and organize job listings—all in
            one place. Stay ahead in your job hunt with real-time updates and
            personalized alerts tailored to your preferences. Take control of
            your professional journey today with Jobs Tracing App.
          </p>
          <Link to='/register' className='btn border-indigo-400 max-w-52'>
            Login/Register
          </Link>
        </div>
        <img
          className='hidden md:block place-items-center'
          src={logo}
          alt='picture'
        />
      </div>
    </main>
    // <div className='flex w-full'>
    //   <Asside />
    //   <div className='w-full h-full'>
    //     <Outlet />
    //   </div>
    // </div>
  );
};
export default Landing;

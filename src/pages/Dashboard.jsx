import { Outlet } from 'react-router-dom';
import Asside from '../components/Asside';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className='flex container max-w-[1536px] mx-auto h-[100vh] flex-col'>
      <Header />
      <div className='flex h-full'>
        <Asside />
        <div className='border w-full bg-neutral-100 p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

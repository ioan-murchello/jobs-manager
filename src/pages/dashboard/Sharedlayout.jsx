import Asside from '../../components/Asside';
import Header from '../../components/Header';
import BigSidebar from '../../components/BigSidebar';
import { Outlet } from 'react-router-dom';
import SmallSidebar from '../../components/SmallSidebar';
const Sharedlayout = () => {
  return (
    <div className='flex min-h-[100vh] h-full flex-col max-w-[1536px] w-full mx-auto'>
      <Header />
      <main className='flex pt-0 px-5 pb-5'>
        <BigSidebar />
        <SmallSidebar />
        <div className='w-full h-full rounded-[14px] pt-5'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Sharedlayout;

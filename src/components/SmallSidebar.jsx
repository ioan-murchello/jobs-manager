import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import { IoStatsChartOutline } from 'react-icons/io5';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { DiGhostSmall } from 'react-icons/di';
import { IoBodyOutline } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={
        isSidebarOpen
          ? 'flex flex-col lg:hidden z-[100] fixed justify-center items-center top-0 left-0 w-full h-full bg-slate-600 opacity-95'
          : 'hidden'
      }
    >
      <button className='mb-8' onClick={toggle}>
        <IoMdClose className='w-[2.5rem] h-[2.5rem] text-red-400' />
      </button>
      <div className='flex flex-col gap-y-5 justify-center'>
        <p className='text-2xl text-center'>Jobs Manager</p>
        <nav>
          <ul className='menu items-center max-w-[300px]'>
            <li className='w-full'>
              <NavLink className='flex justify-center items-center' to='/'>
                <IoStatsChartOutline/>
                Stats
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink
                className='flex justify-center items-center'
                to='/all-jobs'
              >
                <DiGhostSmall/>
                All jobs
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink
                className='flex justify-center items-center'
                to='/add-job'
              >
                <MdFormatListBulletedAdd/>
                Add job
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink
                className='flex justify-center items-center'
                to='/profile'
              >
                <IoBodyOutline/>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default SmallSidebar;

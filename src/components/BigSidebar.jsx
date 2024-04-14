import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { IoStatsChartOutline } from 'react-icons/io5';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { DiGhostSmall } from 'react-icons/di';
import { IoBodyOutline } from 'react-icons/io5';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <>
      {!isSidebarOpen && (
        <aside className='w-60 transition-all duration-300 h-full ml-[-250px] p-0 hidden lg:block lg:ml-0'>
          <div className='flex justify-start items-center pt-0 pr-4 pb-4 w-full flex-col h-full'>
            <nav>
              <ul className='menu bg-base-200 w-56 rounded-box'>
                <li>
                  <NavLink className='flex items-center' to='/'>
                    <IoStatsChartOutline className='w-5 h-5' />
                    Stats
                  </NavLink>
                </li>
                <li>
                  <NavLink className='flex items-center' to='/all-jobs'>
                    <DiGhostSmall className='w-5 h-5' />
                    All jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/add-job'>
                    <MdFormatListBulletedAdd className='w-5 h-5' />
                    Add job
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/profile'>
                    <IoBodyOutline className='w-5 h-5' />
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};
export default BigSidebar;

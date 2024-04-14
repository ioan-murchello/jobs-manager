import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, clearStore } from '../features/user/userSlice';
import {FaUserCircle} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'
import { ImExit } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const name = useSelector(store => store.user.user.name)
  const [logout, showLogout] = useState(false)

  const handleSidebarIsOpen = () => {
    dispatch(toggleSidebar());
  };

  const handleLogoutUser = () => {
    dispatch(clearStore('Logging out...'))
    navigate('/landing')
  }
  return (
    <header className='flex w-full justify-between items-center py-5 px-5'>
      <div className='flex items-center gap-x-10'>
        <div className='md:block hidden text-xl my-5'>Jobs Manager</div>
        <button onClick={handleSidebarIsOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </button>
      </div>

      <div className='md:block hidden text-2xl'>Dashboard</div>

      <div className='flex relative flex-col'>
        <button className='btn' onClick={() => showLogout((logout) => !logout)}>
          <FaUserCircle />
          {name}
          <FaCaretDown />
        </button>
        <div
          className={
            logout
              ? ' absolute z-10 w-full bottom-[-52px] left-0 block'
              : ' hidden'
          }
        >
          <button
            className='btn flex items-center gap-x-3'
            onClick={handleLogoutUser}
          >
            logout <ImExit />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;

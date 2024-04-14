import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Asside = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <>
      {!isSidebarOpen && (
        <aside className='w-80 h-full m-0 p-0 hidden w968:block'>
          <div className='flex justify-start items-center pt-0 px-4 pb-4 w-full flex-col h-full'>
            <nav>
              <ul className='menu bg-base-200 w-56 rounded-box'>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'bg-amber-400' : ''
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                    Stats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/all-jobs'
                    className={({ isActive }) =>
                      isActive ? 'bg-slate-300' : ''
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    All jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/add-job'
                    className={({ isActive }) =>
                      isActive ? 'bg-slate-300' : ''
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                    Add job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/profile'
                    className={({ isActive }) =>
                      isActive ? 'bg-slate-300' : ''
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
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
export default Asside;

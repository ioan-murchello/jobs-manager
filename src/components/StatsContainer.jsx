import { GoPackageDependents } from 'react-icons/go';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { BiSolidErrorAlt } from 'react-icons/bi';
import StatsCard from './StatsCard';
import {useSelector} from 'react-redux'

const StatsContainer = () => {

    const {stats} = useSelector(store => store.allJobs) 

  return (
    <div className='flex flex-col md:flex-row gap-y-5 w-full gap-x-2 justify-center px-3 items-center mb-5'>
      <StatsCard
        image={
          <GoPackageDependents
            className='sm:w-[2.75rem] sm:h-[2.75rem] w-[2rem] h-[2rem]'
            style={{ color: 'rgb(14, 165, 233)' }}
          />
        }
        title={stats['pending'] || 0}
        subtitle='Pending applications'
        color='rgb(14, 165, 233)'
        bgcolor='#0ea5e980'
      />
      <StatsCard
        image={
          <BsCalendar2CheckFill
            className='sm:w-[2.75rem] sm:h-[2.75rem] w-[2rem] h-[2rem]'
            style={{ color: 'orange' }}
          />
        }
        title={stats['interview'] || 0}
        subtitle='Interviews Scheduled'
        color='orange'
        bgcolor='#ffcc8f'
      />
      <StatsCard
        image={
          <BiSolidErrorAlt
            className='sm:w-[2.75rem] sm:h-[2.75rem] w-[2rem] h-[2rem]'
            style={{ color: '#ff9292' }}
          />
        }
        title={stats['declined'] || 0}
        subtitle='Jobs Declined'
        color='#ff9292'
        bgcolor='red'
      />
    </div>
  );
};
export default StatsContainer;

import StatsCard from '../../components/StatsCard';
import {useDispatch, useSelector} from 'react-redux'
import ChartsContainer from '../../components/ChartsContainer';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import { getStats } from '../../features/job/allJobsSlice';
import StatsContainer from '../../components/StatsContainer';

const Stats = () => {
  const dispatch = useDispatch()
  const {isLoading, monthlyApplications} = useSelector(store => store.allJobs)

  useEffect(()=> {
    dispatch(getStats())
  },[])
 

  return (
    <div className=''>
       <StatsContainer/>
       {monthlyApplications.length > 0 && <ChartsContainer/>}
 
    </div>
  );
};
export default Stats;

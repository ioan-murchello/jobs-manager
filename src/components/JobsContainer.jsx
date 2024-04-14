import { useSelector, useDispatch } from 'react-redux';
import JobsCard from './JobsCard';
import { useEffect } from 'react';
import { getAllJobs } from '../features/job/allJobsSlice';
import Loading from './Loading';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const dispatch = useDispatch();
  
  const { jobs, isLoading, totalJobs, search,searchStatus, searchType,sort, page, numOfPages} = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [search, searchStatus, searchType, sort, page]);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (jobs.length === 0) {
    return (
      <section className='p-5'>
        <h2>No jobs to display...</h2>
      </section>
    );
  }

  return (
    <section className='flex flex-col mt-4'>
      <h2 className='text-2xl'>
        {totalJobs} {totalJobs > 1 ? 'Jobs' : 'Job'} Found
      </h2>
      <div className='grid sm:grid-cols-2 gap-8 mt-5'>
        {jobs.map((job, i) => {
          return <JobsCard key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer/>}
    </section>
  );
};
export default JobsContainer;

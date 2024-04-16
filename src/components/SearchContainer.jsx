import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChange,
  clearFilters,
  getAllJobs,
} from '../features/job/allJobsSlice';
import { useState, useMemo } from 'react';

const SearchContainer = () => {

  const [localSearch, setLocalSearch] = useState('')

  const { jobStatus, jobTypeOptions } = useSelector((store) => store.job);

  const { isLoading, search, searchStatus, sort, sortOptions, searchType } =
    useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault()
    setLocalSearch('')
    dispatch(clearFilters())
  }

  const handleSearch = (e) => {
     dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  };

  const debounce = () => {
    let timeoutId;
    return e => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])
 

  return (
    <section>
      <form>
        <h3 className='capitalize text-2xl'>all jobs</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-4 w-full gap-y-5 gap-x-5'>
          <FormRow
            type='text'
            label='Search'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />

          <FormRowSelect
            type='text'
            label='Status'
            name='searchStatus'
            value={searchStatus}
            list={['all', ...jobStatus]}
            handleChange={handleSearch}
          />

          <FormRowSelect
            type='text'
            label='Type'
            name='searchType'
            value={searchType}
            list={['all', ...jobTypeOptions]}
            handleChange={handleSearch}
          />

          <FormRowSelect
            type='text'
            label='Sort'
            name='sort'
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />

          <div className='inline-flex gap-x-4'>
            <button
              type='button'
              className='self-end w-full p-2 max-h-[40px] transition-all bg-[#f89c95] hover:bg-[#ea6258] text-black rounded-md'
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? 'Loading...' : 'Clear Filters'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default SearchContainer;

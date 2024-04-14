import { useSelector, useDispatch } from 'react-redux';
import FormRow from '../../components/FormRow';
import {
  clearValues,
  createJob,
  handleJob,
  editJob,
} from '../../features/job/jobSlice';
import { toast } from 'react-toastify';
import FormRowSelect from '../../components/FormRowSelect';
import { useEffect } from 'react';

const AddJob = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    status,
    jobType,
    jobTypeOptions,
    company,
    jobStatus,

    isEditing,
    editJobId,
    jobLocation,
  } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleJob({ name: 'jobLocation', value: user.location }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields');
      return;
    }
    if(isEditing){
      dispatch(editJob({jobId: editJobId, job: {position, company, jobLocation, jobType, status}}))
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const clearAllInputValues = () => {
    dispatch(clearValues());
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value; 
    dispatch(handleJob({ name, value }));
  };
  return (
    <section className='p-5'>
      <form>
        <h3 className='capitalize text-2xl'>
          {isEditing ? 'edit job' : 'add job'}
        </h3>
        <div className='grid sm:grid-cols-3 mt-4 w-full gap-y-5 gap-x-5'>
          <FormRow
            type='text'
            label='Position'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            label='Company'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />

          <FormRow
            type='text'
            label='Job Location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />

          <FormRowSelect
            type='text'
            label='Status'
            name='status'
            value={status}
            list={jobStatus}
            handleChange={handleJobInput}
          />

          <FormRowSelect
            type='text'
            label='Job Type'
            name='jobType'
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleJobInput}
          />

          <div className='inline-flex gap-x-4'>
            <button
              type='button'
              className='self-end p-2 w-[50%] max-h-[40px] transition-all bg-[#f89c95] hover:bg-[#ea6258] text-black rounded-md'
              disabled={isLoading}
              onClick={clearAllInputValues}
            >
              clear
            </button>
            <button
              type='submit'
              className='self-end p-2 w-[50%] max-h-[40px] transition-all bg-[#d1eaf0] hover:bg-[#98b5bc] text-black rounded-md'
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? 'Please wait...' : 'Save'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default AddJob;

import { Link } from 'react-router-dom';
import { IoNavigateSharp } from 'react-icons/io5';
import { FaCalendarCheck } from 'react-icons/fa';
import { IoBriefcaseSharp } from 'react-icons/io5';
import {useDispatch} from 'react-redux'
import moment from 'moment/moment';
import { deleteJob, setEditJob } from '../features/job/jobSlice';

const JobsCard = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {

  const dispatch = useDispatch()

  let color;
  if (status === 'interview') {
    color = 'lightblue';
  } else if (status === 'pending') {
    color = 'orange';
  } else if (status === 'declined') {
    color = '#e7abab';
  }

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body p-4'>
        <header className='flex items-center gap-x-3 border-b-[2px] pb-5'>
          <div className='p-1 sm:p-2 bg-sky-400 w-12 sm:w-14 rounded-md text-center text-xl sm:text-3xl capitalize'>
            {company.charAt(0)}
          </div>
          <div>
            <h4 className='capitalize text-xl text-violet-900'>{position}</h4>
            <p className='text-sky-600'>{company}</p>
          </div>
        </header>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div>
            <div className='flex items-center gap-x-2 mb-2'>
              <IoNavigateSharp className='text-amber-600 w-4 h-4 sm:w-6 sm:h-6' />
              {jobLocation}
            </div>
            <div className='flex items-center gap-x-2 mb-2'>
              <IoBriefcaseSharp className='text-slate-400 w-4 h-4 sm:w-6 sm:h-6' />
              {jobType}
            </div>
          </div>
          <div>
            <div className='flex items-center gap-x-2 mb-2'>
              <FaCalendarCheck className=' sm:w-6 sm:h-6 mb-2' />
              <p>{moment(createdAt).format('LLL')}</p>
            </div>
            <div
              className='max-w-[100px] p-1 my-4 rounded-md text-center'
              style={{ background: color }}
            >
              {status}
            </div>
          </div>
        </div>
        <div className='card-actions justify-start'>
          <Link
            to='/add-job'
            className='p-2 rounded sm:btn bg-green-300 hover:bg-green-400'
            onClick={() =>
              dispatch(
                setEditJob({
                  editJobId: _id,
                  position,
                  company,
                  jobLocation,
                  jobType,
                  status,
                })
              )
            }
          >
            Edit
          </Link>
          <button
          
            className='p-2 rounded sm:btn bg-red-300 hover:bg-red-400'
            onClick={() => dispatch(deleteJob(_id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default JobsCard;

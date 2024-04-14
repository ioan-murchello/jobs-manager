import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../../utils/axios';
import { logoutUser } from '../user/userSlice';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import {toast} from 'react-toastify'
import { showLoading, hideLoading, getAllJobs } from './allJobsSlice';
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobType: 'full-time',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobStatus: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk(
  'job/createJob', createJobThunk
  
);

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk)

export const editJob = createAsyncThunk('job/editJob', editJobThunk )

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    clearValues: () => {
      return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || '' };
    },

    handleJob: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditJob: (state, {payload}) => {
      return {...state, isEditing: true, ...payload}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createJob.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(createJob.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state = {...state, payload}
      toast.success('Job created')

    })
    builder.addCase(createJob.rejected, (state, {payload}) => {
      state.isLoading = false
      toast.error(payload)
    })
    builder.addCase(deleteJob.fulfilled, (state) => {
      toast.success("Job removed!")
    })
    builder.addCase(deleteJob.rejected, (state, { payload }) => {
      toast.error(payload);
    })
    builder.addCase(editJob.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(editJob.fulfilled, (state) => {
      state.isLoading = false
      toast.success('Job Modified...')
    })
    builder.addCase(editJob.rejected, (state, {payload}) => {
      state.isLoading = false
      toast.error(payload)
    })

  }
});

export const { clearValues, handleJob, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;

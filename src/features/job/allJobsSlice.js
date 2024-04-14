import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { customFetch } from '../../utils/axios';

const initialFilterState = {
  search: '',
  searchType: 'all',
  searchStatus: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterState,
};

export const getStats = createAsyncThunk(
  'allJobs/getStats',
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get('/jobs/stats');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getAllJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {
    const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    try {
      const res = await customFetch.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },

    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilterState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: state => state = initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllJobs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.totalJobs = payload.totalJobs;
      state.numOfPages = payload.numOfPages;
    });
    builder.addCase(getAllJobs.rejected, (state, payload) => {
      state.isLoading = false;
      toast.error(payload);
    });

    //  ================ stats

    builder.addCase(getStats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStats.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    });
    builder.addCase(getStats.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = allJobsSlice.actions;
export default allJobsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetch } from '../../utils/axios';
import { toast } from 'react-toastify';
import { clearAllJobsState } from '../job/allJobsSlice';
import { clearValues } from '../job/jobSlice';

import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'; 

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkApi) => {
    try {
      const res = await customFetch.post('/auth/register', user);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkApi) => {
    try {
      const res = await customFetch.post('/auth/login', user);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkApi) => {
    try {
      const res = await customFetch.patch('/auth/updateUser', user);
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkApi.dispatch(clearStore('Unauthorizied! Logging out..'));
        return thunkApi.rejectWithValue('Unauthorizied! Logging out...');
      }
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const clearStore = createAsyncThunk(
  'user/clearStore',
  async (message, thunkApi) => {
    try {
      thunkApi.dispatch(logoutUser(message));
      thunkApi.dispatch(clearAllJobsState());
      thunkApi.dispatch(clearValues());
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
      state.isSidebarOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello Ther ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //=================== login

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;

        state.isLoading = false;
        addUserToLocalStorage(user);
        state.user = user;

        toast.success(`Welcome back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //================== update

      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Datas updated, ${user.name}`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      // ===== clearStore

      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..')
      })
  },
});

 
export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;

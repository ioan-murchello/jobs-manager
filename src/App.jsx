import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { Landing, Register, Error, ProtectedRoute } from './pages';
import { AddJob, AllJobs, Profile, Stats,Sharedlayout } from './pages/dashboard/index';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  return (
    <Provider store={store}>
      <ToastContainer position='top-right' autoClose={4000} />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Sharedlayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path='add-job' element={<AddJob />} />
            <Route path='all-jobs' element={<AllJobs />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter> 
    </Provider>
  );
}

export default App;

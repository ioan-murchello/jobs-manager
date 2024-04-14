import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setValues({ ...values, [name]: val });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.warn('Please fill out all fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  const memberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);
  return (
    <section className='flex justify-center container mx-auto min-h-[100vh] p-6 items-center flex-col gap-y-8'>
      <form
        onSubmit={onSubmit}
        className='grid place-items-center grid-cols-1 gap-6 border border-indigo-500 rounded-2xl px-6 py-10 max-w-80 w-full shadow-lg shadow-indigo-200'
      >
        <div className='bg-indigo-500 p-3 mb-10 text-xl text-white rounded-xl'>
          JobbsManager
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold mb-4 text-indigo-300'>
            {values.isMember ? 'Login' : 'Register'}
          </h2>
          {!values.isMember && (
            <InputForm
              label='name'
              type='text'
              name='name'
              statevalues={values.name}
              handler={handleChange}
            />
          )}

          <InputForm
            label='email'
            type='email'
            name='email'
            statevalues={values.email}
            handler={handleChange}
          />
          <InputForm
            label='password'
            type='password'
            name='password'
            statevalues={values.password}
            handler={handleChange}
          />
          <button
            type='submit'
            className='btn bg-indigo-200 w-full capitalize'
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'submit'}
          </button>
          <button
            type='button'
            className='btn bg-indigo-300 w-full capitalize'
            disabled={isLoading}
            onClick={() => dispatch(loginUser({email: 'testUser@test.com', password: 'secret'}))}
          >
            {isLoading ? 'loading...' : 'demo app'}
          </button>
        </div>
        <span className=''>
          {values.isMember ? 'Not a memeber yet? ' : 'Allready a member? '}
          <button
            onClick={memberHandler}
            className='text-indigo-600 font-semibold underline'
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </span>
      </form>
    </section>
  );
};
export default Register;

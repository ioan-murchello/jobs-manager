import { useState } from 'react';
import { toast } from 'react-toastify';
import FormRow from '../../components/FormRow';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';



const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, email, location } = userData;

    if (!name || !lastName || !email || !location) {
      toast.warn('Please fill all fields');
      return;
    }

    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };
  return (
    <section className='p-5'>
      <form onSubmit={handleSubmit}>
        <h3 className='capitalize text-2xl'>profile</h3>
        <div className='grid sm:grid-cols-3 mt-4 w-full gap-y-5 gap-x-5'>
          <FormRow
            type='text'
            label='Name'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />

          <FormRow
            type='text'
            label='Last Name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />

          <FormRow
            type='email'
            label='Email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />

          <FormRow
            type='text'
            label='Location'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />

          <button
            type='submit'
            className='self-end p-2 max-h-[40px] transition-all bg-[#a1a1a1] hover:bg-[#98b5bc] text-black rounded-md'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? 'Please wait...' : 'Save changes'}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Profile;

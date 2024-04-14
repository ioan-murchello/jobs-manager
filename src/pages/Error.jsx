import { Link } from 'react-router-dom';
import errorImg from '../assets/error.svg'

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Page not found</h1>
      <p className='text-lg mb-4'>We can't seem to find page you're looking for</p>
      <img className='w-[400px]' src={errorImg} alt='error 404' />
      <Link
        to='/'
        className='bg-blue-500 hover:bg-blue-600 mt-8 text-white py-2 px-4 rounded-md'
      >
        back home
      </Link>
    </div>
  );
}
export default Error
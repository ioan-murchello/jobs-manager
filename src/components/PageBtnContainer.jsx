import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/job/allJobsSlice';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { BsChevronDoubleRight } from 'react-icons/bs';

const PageBtnContainer = () => {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJobs);

  const pages = Array.from({ length: numOfPages }, (_, i) => {
    return i + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  return (
    <div className='mt-6 flex self-end gap-x-2'>
      <button
        className={
          page === 1
            ? 'text-white p-[4px] sm:px-4 sm:py-2 flex items-center bg-sky-200 rounded'
            : 'text-white p-[4px] sm:px-4 sm:py-2 flex items-center bg-sky-400 rounded'
        }
        disabled={page === 1}
        onClick={prevPage}
      >
        <BsChevronDoubleLeft className='sm:mr-2' />
        <span className='hidden sm:block'>next</span>
      </button>
      <div>
        {pages.map((pageNumber) => {
          return (
            <button
              className={
                pageNumber === page
                  ? 'rounded text-white p-[4px] sm:px-4 sm:py-2 bg-sky-500'
                  : 'bg-sky-300  text-white p-[4px] sm:px-4 sm:py-2'
              }
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className={
          page === numOfPages
            ? 'text-white p-[4px] sm:px-4 sm:py-2 flex items-center bg-sky-200 rounded'
            : 'text-white p-[4px] sm:px-4 sm:py-2 flex items-center bg-sky-400 rounded'
        }
        disabled={page === numOfPages}
        onClick={nextPage}
      >
        <span className='hidden sm:block'>next</span>
        <BsChevronDoubleRight className='sm:ml-2' />
      </button>
    </div>
  );
};
export default PageBtnContainer;

import React from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
interface prop {
  allpages: number;
  total: number;
  paginate: (value: number) => void;
}
const Pages = ({ allpages, total, paginate }: prop) => {
  let totalpages: any = [];
  const setthepagecount = () => {
    let i = 1;
    for (i; i <= Math.ceil(total / allpages); i++) {
      totalpages.push(i);
    }
  };

  setthepagecount();
  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'>
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
              <span className='sr-only'>Previous</span>
              {/* <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' /> */}
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {totalpages.map((num: any) => (
              <p>
                <a
                  onClick={() => paginate(num)}
                  href={`${num}`}
                  className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
                  {num}
                </a>
              </p>
            ))}
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
              <span className='sr-only'>Next</span>
              {/* <ChevronRightIcon className='h-5 w-5' aria-hidden='true' /> */}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pages;

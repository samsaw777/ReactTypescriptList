import React, { useState } from "react";
import { header } from "./Mockapi";
interface IProps {
  name: string;
  fields: string;
}
const Header: React.FC = () => {
  const [headervalues] = useState<IProps[]>(header);
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 '>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    {headervalues.map((header) => (
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        key={header.fields}>
                        {header.name}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// <table className='table-auto'>
// <thead>
//   <tr>
//     {headervalues.map((header) => (
//       <th key={header.fields}>{header.name}</th>
//     ))}
//   </tr>
// </thead>
// </table>

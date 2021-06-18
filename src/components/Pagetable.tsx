import React, { useState, useEffect } from "react";
import Mock from "./Mockapi";
import Pages from "./Page";
import Search from "./Search";
import { header } from "./Mockapi";
import Drop from "./Droupdown";
import axios from "axios";
//settign the interface
interface Submission {
  answerText: string;
  questionEmbedId: string;
  user: {
    email: string;
  };
  created: string;
}

interface IProps {
  name: string;
  fields: string;
}

const PageTable: React.FC = () => {
  const [headervalues] = useState<IProps[]>(header);
  const [users, setUser] = useState<Submission[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postperpage, setPostPerPage] = useState<number>(12);
  const [drop, setDrop] = useState<any>("Sort By Name(ASC)");
  console.log(search);
  console.log(users);
  console.log(drop);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  //Sorting the value
  const sorted = users.sort((a, b): any => {
    if (drop) {
      const isReversed = drop === "Sort By Name(ASC)" ? 1 : -1;
      return isReversed * a.user.email.localeCompare(b.user.email);
    }
  });

  //setting search Filter
  const onSearch = (value: any) => {
    setSearch(value);
    setCurrentPage(1);
  };
  const allpages = sorted.filter((user) => {
    return user.user.email.indexOf(search) !== -1;
  });

  //Setting the pagination

  const indexOfLastPage = currentPage * postperpage;
  const indexOfFirstPage = indexOfLastPage - postperpage;
  const pages = allpages.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (value: number): void => {
    setCurrentPage(value);
  };

  return (
    <div className='max-w'>
      <div className='container'>
        <div className='max-w flex-column justify-end sm:flex md:flex lg:flex'>
          <Search onSearch={onSearch} />
          <Drop onDrop={setDrop} />
        </div>
        <div className='overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative'>
          <table className='border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative'>
            <thead className='text-white'>
              <tr className='text-left'>
                {header.map((head) => (
                  <th
                    key={head.fields}
                    className='py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-500'>
                    {head.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='flex-1 sm:flex-none'>
              {pages.map((page) => (
                <tr>
                  <td className='border-dashed border-t border-gray-200 px-3'>
                    {page.answerText}
                  </td>
                  <td className='border-dashed border-t border-gray-200 px-3'>
                    {page.questionEmbedId}
                  </td>
                  <td className='border-dashed border-t border-gray-200 px-3'>
                    {page.user.email}
                  </td>
                  <td className='border-dashed border-t border-gray-200 px-3'>
                    {page.created}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pages allpages={postperpage} total={users.length} paginate={paginate} />
    </div>
  );
};

export default PageTable;

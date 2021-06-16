import React, { useState, useEffect } from "react";
import Mock from "./Mockapi";
import Pages from "./Page";
const PageTable: React.FC = () => {
  interface Submission {
    answerText: string;
    questionEmbedId: string;
    user: {
      email: string;
    };
    created: string;
  }

  const [users, setUser] = useState<Submission[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postperpage, setPostPerPage] = useState<number>(8);
  useEffect(() => {
    setUser(Mock);
  }, []);

  //Setting the pagination
  const indexOfLastPage = currentPage * postperpage;
  const indexOfFirstPage = indexOfLastPage - postperpage;
  const pages = users.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (value: number):void => {setCurrentPage(value);}
  return (
    <div>
      {pages.map((user) => (
        <ul className='flex flex-row border list-none rounded-lg mx-4 p-4'>
          <li className=' px-4'>{user.answerText}</li>
          <li className=' px-4'>{user.questionEmbedId}</li>
          <li className=' px-4'>{user.user.email}</li>
          <li className=' px-4'>{user.created}</li>
        </ul>
      ))}
      <Pages allpages={postperpage} total={users.length} paginate={paginate} />
    </div>
  );
};

export default PageTable;

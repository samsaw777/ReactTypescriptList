import React, { useState, useEffect } from "react";
import Mock from "./Mockapi";
import Pages from "./Page";
import Search from "./Search";
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
  const [search, setSearch] = useState("");
  // const [use, setUse] = useState<Submission[]>([]);
  // console.log(setUse);
  console.log(search);
  console.log(users);
  // const dis = () => {
  //   users.map((user) => {
  //     console.log(user.user.email);
  //   });
  // };
  // dis();
  // const useremail = "person2@gmail.com";
  // const display = users.filter((obj) => {
  //   return obj["user"]["email"] === useremail;
  // });

  // console.log(display);

  //Filter
  const onSearch = (value: any) => {
    setSearch(value);
    setCurrentPage(1);
  };
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postperpage, setPostPerPage] = useState<number>(8);
  useEffect(() => {
    setUser(Mock);
  }, []);

  useEffect(() => {
    if (search) {
      const display = users.filter((obj) => {
        return obj["user"]["email"].includes(search);
      });
      // const display = users.filter((job) =>
      //   Object.values(job).some((value) => value.includes(search))
      // );
      console.log(display);
    } else {
      setUser(Mock);
    }
  }, [search]);
  // const search = (userval) =>{
  //   return userval === users.user.email
  // }
  //Setting the pagination
  const indexOfLastPage = currentPage * postperpage;
  const indexOfFirstPage = indexOfLastPage - postperpage;
  const pages = users.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (value: number): void => {
    setCurrentPage(value);
  };
  return (
    <div>
      <Search onSearch={onSearch} />
      {pages.map((user) => (
        <ul
          className='flex flex-row border list-none rounded-lg mx-4 p-4'
          key={user.answerText}>
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

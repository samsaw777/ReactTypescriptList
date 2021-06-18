import React, { useState } from "react";
interface Props {
  onSearch: (value: any) => any;
}
const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");
  const display = (value: any) => {
    let searchtext = value.toLowerCase();
    setSearch(searchtext);
    onSearch(searchtext);
  };
  return (
    <div>
      <input
        className='border px-2 rounded-sm focus:outline-none  focus:border-blue-300 focus:ring m-4'
        type='text'
        value={search}
        placeholder='Search.......'
        onChange={(e) => display(e.target.value)}
      />
    </div>
  );
};

export default Search;

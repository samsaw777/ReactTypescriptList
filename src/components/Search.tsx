import React, { useState } from "react";
interface Props {
  onSearch: (value: any) => any;
}
const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");
  const display = (value: any) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <div>
      <input
        type='text'
        value={search}
        placeholder='Search.......'
        onChange={(e) => display(e.target.value)}
      />
    </div>
  );
};

export default Search;

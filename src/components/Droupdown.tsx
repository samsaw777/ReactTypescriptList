import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Sort By Name(ASC)", "Sort By Name(DESC)"];

interface Props {
  onDrop: (value: any) => any;
}
const DropdownB = ({ onDrop }: Props) => {
  const [defaultvalue, setDefaultvalue] = useState<any>(options[0]);
  console.log(defaultvalue);
  const handledrop = (value: any) => {
    setDefaultvalue(value);
    onDrop(value);
  };
  return (
    <Dropdown
      options={options}
      value={defaultvalue}
      onChange={(value) => handledrop(value.value)}
      placeholder='Select an option'
      className='max-w-xs mx-4 my-1 text-sm'
    />
  );
};

export default DropdownB;

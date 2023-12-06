import { Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState } from "react";
import { langType } from "../../../util/type";

const Header = () => {
  const [value, setValue] = useState<string>(langType[12].lang);
  const langDefault = localStorage.getItem("lang");

  if (!langDefault) {
    localStorage.setItem("lang", value);
    localStorage.setItem("ms-playground-", langType[12].code);
  }

  const handleLanguage = (e: number) => {
    setValue(langType[e].lang);
    localStorage.setItem("lang", value);
    localStorage.setItem("ms-playground-", langType[e].code);
  };

  return (
    <div className="bg-primary text-white  text-center flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center">
        <button className="name-button-browse ">Back to Home</button>
        <h3 className="text-center mr-5 ml-5 font-bold">HTML-CSS Playground</h3>
      </div>
      <div className="mr-9 ">
        <Select
          defaultValue={langDefault}
          style={{ width: 120 }}
          className="w-36"
          onChange={handleLanguage}
        >
          {langType.map((element: any) => (
            <Option key={element.id} value={langType.indexOf(element)}>
              {element.lang}
            </Option>
          ))}
        </Select>
        <button className="name-button-browse mx-5 my-3">Run code</button>
      </div>
    </div>
  );
};

export default Header;

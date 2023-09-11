import React from "react";
import imageLogo from "../../../assert/logo/W3Schools_logo.svg";
import "./header.scss";
import { SearchOutlined } from "@ant-design/icons";
export const Header: React.FC = () => {
  return (
    <section className="header left-0 right-0 fixed">
      <div className="header-bar flex align-center justify-between">
        <div className="header-bar-left align-center flex flex-row align-center">
          <img
            src={imageLogo}
            title="W3Schools"
            width={"38px"}
            className="m-2 ml-5 mr-5"
          />
          <div className="bar-left-container">
            <ul className="left-container-list flex flex-row items-center">
              <li className="container-list-item">Tutorials</li>
              <li className="container-list-item">Excercise</li>
              <li className="container-list-item">Get Certificated</li>
              <li className="container-list-item">Services</li>
              <li className="container-list-search ">
                <div className="m-2 list-search-input flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl">
                  <input
                    className="search-input-item w-32 h-3 outline-none ml-2 mr-2 italic hover:not-italic"
                    type="search"
                    style={{ backgroundColor: "white" }}
                    placeholder="Search..."
                  />
                  <SearchOutlined className="text-lg mr-2 " />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bar-right flex flex-row items-cente">
          <div className="bar-right-container flex flex-row items-center m-2 ml-5 mr-5 ">
            <button className="right-container-signup ">Sign Up</button>
            <button className="right-container-login  ">Log in</button>
          </div>
        </div>
      </div>
      <div className="header-naviagtion flex flex-row items-center">
        <ul className="header-navigation-list flex flex-row items-center">
          <li className="">
            <button>Sign Up</button>
          </li>
          <li className="">
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

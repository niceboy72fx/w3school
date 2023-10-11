import React, { useState } from "react";
import imageLogo from "../../../assert/logo/W3Schools_logo.svg";
import "./header.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const TempData: Array = [
  { name: "Tutorial" },
  { name: "Excercise" },
  { name: "Get Certificated" },
  { name: "Serviced" },
];

interface BannerName {
  name: any;
}

export const HeaderBody: React.FC<BannerName> = ({ name }) => {
  return (
    <div className="header-dropdown " style={{}}>
      <div className="header-dropdown-nav">
        <div className="dropdown-nav-banner flex items-center justify-between w-full ">
          <h3
            className="text-left font-bold"
            style={{ fontSize: "2rem", color: "#fff4a3" }}
          >
            {name}
          </h3>
          <div
            className="m-2 nav-banner-input flex flex-row items-center outline outline-1  h-full  rounded-3xl "
            style={{ backgroundColor: "#464646" }}
          >
            <input
              className="banner-input-item border-none w-72 h-10 outline-none ml-2 mr-2 italic hover:not-italic  font-bold text-white"
              type="search"
              style={{ backgroundColor: "#464646" }}
              placeholder="Filter..."
            />
            <SearchOutlined className="text-lg mr-2 text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC = () => {
  const [dropHeader, setDropHeader] = useState<boolean>(false);
  const [bannerNav, setBannerNav] = useState<string>("");
  const navigate = useNavigate();
  return (
    <header className="header left-0 right-0 ">
      <div className="header-bar flex align-center justify-between bg-white">
        <div className="header-bar-left align-center flex flex-row align-center">
          <img
            src={imageLogo}
            title="W3Schools"
            width={"38px"}
            className="m-2 ml-5 mr-5"
          />
          <div className="bar-left-container">
            <ul className="left-container-list flex flex-row items-center">
              {TempData.map((item: any) => {
                return (
                  <li
                    className="container-list-item"
                    onClick={() => {
                      if (!dropHeader) {
                        setDropHeader(true);
                        setBannerNav(item.name);
                        console.log("check");
                      } else {
                        setDropHeader(false);
                        setBannerNav("");
                      }
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
              <li className="container-list-search ">
                <div className="m-2 list-search-input flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl">
                  <input
                    className="search-input-item border-none w-32 h-3 outline-none ml-2 mr-2 italic hover:not-italic"
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
            <button
              className="right-container-signup"
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Sign Up
            </button>
            <button
              className="right-container-login "
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Log in
            </button>
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
      {dropHeader ? <HeaderBody name={bannerNav} /> : <></>}
    </header>
  );
};

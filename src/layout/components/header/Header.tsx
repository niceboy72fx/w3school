import React, { useEffect, useState } from "react";
import imageLogo from "../../../assert/logo/W3Schools_logo.svg";
import "./header.scss";
import {
  LogoutOutlined,
  ReadOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import ButtonGroup from "antd/es/button/button-group";
import { Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/reducer/auth";
import { Dropdown } from "flowbite-react";

const TempData: Array = [
  { name: "Tutorial" },
  { name: "Excercise" },
  { name: "Get Certificated" },
  { name: "Serviced" },
];

export const HeaderBody: React.FC<{ name: any }> = ({ name }) => {
  return (
    <div className="header-dropdown opacity-100" style={{}}>
      {name == "Menu" ? (
        <></>
      ) : (
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
      )}
    </div>
  );
};

export const Header: React.FC = () => {
  const [dropHeader, setDropHeader] = useState<boolean>(false);
  const [bannerNav, setBannerNav] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <header className="header left-0 right-0  " style={{ opacity: "2.5" }}>
      <div className="header-bar flex align-center justify-between bg-white">
        <div className="header-bar-left align-center flex flex-row align-center items-center">
          <img
            src={imageLogo}
            title="W3Schools"
            width={"38px"}
            className="m-2 ml-5 mr-5"
            onClick={async () => {
              navigate("/");
              await window.location.reload();
            }}
          />
          <div className="bar-left-container">
            <ul
              className="left-container-list flex flex-row items-center "
              id="hide"
            >
              <li
                className="container-list-item"
                onClick={() => {
                  if (!dropHeader) {
                    setDropHeader(true);
                    setBannerNav("Menu");
                  } else {
                    setDropHeader(false);
                    setBannerNav("");
                  }
                }}
              >
                Menu
              </li>
            </ul>
            <ul
              className="left-container-list flex flex-row items-center "
              id="hiden"
            >
              {TempData.map((item: any) => {
                return (
                  <li
                    className="container-list-item"
                    onClick={() => {
                      if (!dropHeader) {
                        setDropHeader(true);
                        setBannerNav(item.name);
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
            </ul>
          </div>
        </div>
        <div className="header-bar-right flex flex-row items-center">
          {localStorage.getItem("login") == "true" ? (
            <div className="mr-14">
              <Dropdown
                label={
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-green-600 float-left">
                    <svg
                      className="absolute w-12 h-12 text-white -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      alt="My Learning"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                }
                arrowIcon={false}
                inline
              >
                <Dropdown.Item
                  className="text-black p-5 flex flex-row items-center justify-start"
                  onClick={() => {
                    navigate("/my-learning");
                  }}
                >
                  <ReadOutlined className="m-2" />
                  <p className="m-2">My Learning</p>
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-black p-5 flex flex-row items-center justify-start"
                  onClick={() => navigate("/my-infor")}
                >
                  <UserOutlined className="m-2" />
                  <p className="m-2">Your Account</p>
                </Dropdown.Item>
                <Dropdown.Divider className="text-black" />
                <Dropdown.Item className="text-black p-5 flex flex-row items-center justify-start">
                  <LogoutOutlined className="m-2" />
                  <p className="m-2 " onClick={() => LogOut()}>
                    Sign out
                  </p>
                </Dropdown.Item>
              </Dropdown>
            </div>
          ) : (
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
                  window.location.reload();
                  navigate("/auth/login", { replace: true });
                }}
              >
                Log in
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="header-naviagtion flex flex-row items-center justify-between">
        <ul className="header-navigation-list flex flex-row items-center">
          <li className="">
            <button>Sign Up</button>
          </li>
          <li className="">
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
      {dropHeader ? (
        <div className="drop-container down">
          <HeaderBody name={bannerNav} />
        </div>
      ) : (
        <div className="drop-container up"></div>
      )}
    </header>
  );
};

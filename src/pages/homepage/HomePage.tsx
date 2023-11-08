import { SearchOutlined } from "@ant-design/icons";
import { RenderBody } from "./RenderBody";
import "./HomePage.scss";
import img from "./img/myl-green-off.png";
import mock from "./img/html.jpg";
import React from "react";

const dataLang = [
  { name: "HTML", backgroundColor: "--green-w3", color: "white" },
  { name: "CSS", backgroundColor: "--light-pink-w3", color: "black" },
  { name: "JavaScript", backgroundColor: "--yellow-w3", color: "black" },
  { name: "SQL", backgroundColor: "--light-pink-w3", color: "black" },
  { name: "C++", backgroundColor: "--light-black-w3", color: "white" },
  { name: "Python", backgroundColor: "--light-blue-w3", color: "white" },
];

const HomePage: React.FC = () => {
  return (
    <section className="w3">
      <div className="w3-intro w-full  flex items-center justify-center text-center">
        <div className="w3-intro-search flex flex-col items-center justify-center  ">
          <h1 className="intro-search-banner pb-3 text-bold text-white w-full">
            Learn to Code
          </h1>
          <h2
            className="intro-search-panel text-bold mb-8 mt-5 w-full"
            style={{}}
          >
            With the world's largest web developer site.{" "}
          </h2>
          <div className="intro-search-input m-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
            <input
              className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
              type="search"
              style={{ backgroundColor: "white" }}
              placeholder="Search our tutorials, e.g. HTML"
            />
            <div className="search-input-outline">
              <SearchOutlined className="text-xl m-2 mr-4  font-bold text-white" />
            </div>
          </div>
          <h2 className="intro-search-href mt-5 mb-5 text-white w-full">
            Not Sure Where To Begin?
          </h2>
        </div>
      </div>
      <div className="w3-draw">
        <svg
          style={{ backgroundColor: "#D9EEE1" }}
          width="100%"
          height="70"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="wavepath"
            d="M0,0  L110,0C35,150 35,0 0,100z"
            fill="#282A35"
          ></path>
        </svg>
      </div>
      <div className="w3-lang">
        <div className="lang-grid">
          {dataLang.map((item) => {
            return (
              <div
                className="shadow-2xl"
                style={{
                  backgroundColor: `var(${item.backgroundColor})`,
                  color: `${item.color}`,
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w3-code">
        {RenderBody.map((item: any) => {
          return (
            <div
              className="langtag-component"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="component-boxing">
                <div className="boxing-lang box-margin">
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <button>Learn {item.name}</button>
                </div>
                <div className="boxing-example box-margin" id="hide_container">
                  <p className="font-bold">{item.name} Example</p>
                  <img src={mock} />
                  <button>Try it Yourself</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w3-score">
        <div className="score-containner">
          <div className="containner-header">
            <h2>My Learning</h2>
            <p>Track your progress with our free "My Learning" program.</p>
            <p>Log in to your account, and start earning points!</p>
          </div>
          <img src={img} />
          <button>Sign Up for Free</button>
        </div>
      </div>
      <div className="w3-excercise">
        <div className="excercise-flex">
          <div className="flex-header">
            <h2>Exercises and Quizzes</h2>
            <p>Test your skills!</p>
          </div>
          <div className="flex-body">
            <div className="body-box ex-background shadow-2xl">Exercises</div>
            <div className="body-box qui-background shadow-2xl">Quizzes</div>
          </div>
        </div>
      </div>
      <div className="w3-"></div>
      <div className="w3-"></div>
      <div className="w3-"></div>
      <div className="w3-"></div>
      <div className="w3-"></div>
    </section>
  );
};

export default HomePage;

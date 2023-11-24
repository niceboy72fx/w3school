import React from "react";
import "./tutorial.scss";
import html from "./html.svg";
import { SearchOutlined } from "@ant-design/icons";

const mock: object = [
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
  {
    name: "Learn HTML",
    level: "beginner",
    course_count: 74,
    decription:
      "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
  },
];
const ListCourse: React.FC<{ listCourse: object }> = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-10">
        {mock.map((item: any) => (
          <div className="border border-solid w-64 rounded-xl hover:shadow-2xl hover:transition hover:transition-opacity:0.5s hover:duration-700 hover:shadow-green-200">
            <div className="flex items-center justify-center m-5 mt-8 mb-8 rounded-xl ">
              <img
                className="w-20 h-20  rounded-full shadow-lg"
                src={html}
                alt=""
              />
            </div>
            <div className="p-5 float-left w-full border-none rounded-b-xl ">
              <p className="uppercase text-xs font-thin mb-1">Tutorial</p>
              <div className="">
                <p className="uppercase text-sm font-bold mb-1">Learn HTML</p>
                <div className="flex flex-row mb-1">
                  <p className="text-xs font-light ">Beginner,</p>
                  <p className="ml-2 text-xs font-light ">74 lessions</p>
                </div>{" "}
              </div>
              <p className=" text-xs mt-1 mb-1">
                Welcome to the new "My learning" here at W3schools. This will be
                your hub to all the tutorials we offer and your learning
                progress.
              </p>
              <div className="text-xs font-bold hover:text-green-600 w-full flex justify-end mt-5 mb-3 mr-10 transition transition-opacity:0.2s duration-1000">
                <p> Read more</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Tutorial: React.FC = () => {
  return (
    <section className="mt-28">
      <div className="infor-tag flex flex-col items-center m-10 ">
        <div className="mt-4">
          <h2 className="tag-frame-name  mb-10 flex justify-between">
            <p className="text-3xl uppercase font-semibold">More tutorials</p>
            <div className="m-2 nav-banner-input flex flex-row items-center outline outline-1  h-full  rounded-3xl ">
              <input
                className="banner-input-item border-none w-72 h-10 outline-none ml-2 mr-2   font-bold "
                type="search"
                placeholder="Filter..."
              />
              <SearchOutlined className="text-lg mr-2  " />
            </div>
          </h2>
          <ListCourse />
        </div>
      </div>
    </section>
  );
};

export default Tutorial;

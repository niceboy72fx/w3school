import React from "react";
import "./MyLearning.scss";
import html from "./html.svg";
const PreBag: React.FC<{ tagButton: boolean }> = ({ tagButton }) => {
  return (
    <div className="m-5">
      <div className="tag-frame-board mt-10 mb-10 p-20">
        <div className="frame-board-intro flex flex-col items-center justify-center">
          <h2 className="text-3xl mt-8 mb-8 pl-56 pr-56">
            This feed shows tutorials in progress.
          </h2>
          <p className="text-wrap mt-5 mb-5 ">
            Are there tutorials you miss? Reload the page.
          </p>
          {tagButton ? (
            <div className="frame-name-button">
              <button className="name-button-browse ">Browse Tutorial</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const ListCourse: React.FC<{ listCourse: object }> = () => {
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
  ];
  return (
    <div className="grid grid-cols-4 gap-4 m-10">
      {mock.map((item: any) => (
        <div className="border border-solid w-64 shadow-xl rounded-xl">
          <div className="flex items-center justify-center m-5 mt-8 mb-8 ">
            <img
              className="w-20 h-20  rounded-full shadow-lg"
              src={html}
              alt=""
            />
          </div>
          <div className="p-5 float-left w-full border border-linear ">
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
              your hub to all the tutorials we offer and your learning progress.
            </p>
            <div className="text-xs font-bold hover:text-green-600 w-full flex justify-end mt-5 mb-3 mr-10 trasition transition-opacity:1s">
              <p> Read more</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-sm font-bold hover:text-green-600  m-2 trasition transition-opacity:1s">
        <p>Explore All</p>
      </div>
    </div>
  );
};

const MyLearning: React.FC = () => {
  return (
    <section className="mt-28">
      <div className="infor-tag flex flex-col items-center ">
        <div className="infor-tag-frame ">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            My learning
          </h2>
          <div className="tag-frame-board mt-10 mb-10 p-20">
            <div className="frame-board-intro">
              <h2 className="text-3xl mt-8 mb-8">Hi, name</h2>
              <p className="text-wrap mt-5 mb-5 ">
                Welcome to the new "My learning" here at W3schools. This will be
                your hub to all the tutorials we offer and your learning
                progress.
              </p>
              <p className="text-wrap mt-5 mb-5 ">
                We hope you will continue to learn with us.
              </p>
              <div className="frame-name-button">
                <button className="name-button-browse ">Browse Tutorial</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            In Progress
          </h2>
          <PreBag tagButton={true} />
        </div>

        <div className="mt-4">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            More tutorials
          </h2>
          {/* <PreBag tagButton={false} /> */}
          <ListCourse />
        </div>
      </div>
    </section>
  );
};

export default MyLearning;

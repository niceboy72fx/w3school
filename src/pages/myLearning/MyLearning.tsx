import React from "react";
import "./MyLearning.scss";
import html from "./html.svg";
import { FlashCard, ProgressCard } from "../components/Card";
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
const ListCourse: React.FC<{ listCourse: object }> = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-4 m-10">
        {mock.map((item: any) => (
          <FlashCard />
        ))}
      </div>
      <div className=" w-full flex justify-end ">
        <button className="hover:text-green-600 mr-16 mb-10 transition transition-opacity:0.2s duration-1000 text-sm font-bold">
          Explore All
        </button>
      </div>
    </section>
  );
};

const ProgressCourse: React.FC<{ listCourse: object }> = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-4 m-10">
        {mock.map((item: any) => (
          <ProgressCard />
        ))}
      </div>
      <div className=" w-full flex justify-end ">
        <button className="hover:text-green-600 mr-16 mb-10 transition transition-opacity:0.2s duration-1000 text-sm font-bold">
          Explore All
        </button>
      </div>
    </section>
  );
};

const FrameBoard: React.FC<{ data: object }> = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="infor-tag-frame ">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            My learning
          </h2>
          <div className="tag-frame-board mt-10 mb-10 p-20 flex flex-row">
            <div className="frame-board-intro m-3">
              <h2 className="text-3xl mt-8 mb-8">Hi, name</h2>
              <p className="text-wrap mt-5 mb-5  ">
                Welcome to the new "My learning" here at W3schools. This will be
                your hub to all the tutorials <br /> we offer and your learning
                progress.
              </p>
              <div className="frame-name-button">
                <button className="name-button-browse ">
                  Continue Learning
                </button>
              </div>
            </div>
            <div className="shadow-2xl rounded-2xl shadow-green-400 border-none no-underline bg-white ">
              <ProgressCard />
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

const MyLearning: React.FC = () => {
  return (
    <section className="mt-28">
      <div className="infor-tag flex flex-col items-center ">
        <FrameBoard
          data={{
            name: "Learn HTML",
            level: "beginner",
            course_count: 74,
            decription:
              "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
          }}
        />
        <div className="mt-4">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            In Progress
          </h2>
          {mock ? <ProgressCourse /> : <PreBag tagButton={false} />}
        </div>

        <div className="mt-4">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            More tutorials
          </h2>
          {mock ? <ListCourse /> : <PreBag tagButton={false} />}
        </div>
      </div>
    </section>
  );
};

export default MyLearning;

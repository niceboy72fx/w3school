import React from "react";
import "./MyLearning.scss";
const MyLearning: React.FC = () => {
  return (
    <section className="mt-24">
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
      </div>
    </section>
  );
};

export default MyLearning;

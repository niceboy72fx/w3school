export const PreBag: React.FC<{ tagButton: boolean }> = ({ tagButton }) => {
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

export const ProgressBag: React.FC<{ props: any }> = ({ props }) => {
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
        </div>
      </div>
    </div>
  );
};

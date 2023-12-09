import { SearchOutlined } from "@ant-design/icons";
import { CourseMockData } from "../../mock/api";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Result, Select } from "antd";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [searchInput, setSearchInput] = useState<Array>(CourseMockData);
  const lang = queryParams.get("lang");

  const [searchValue, setSearchValue] = useState<string>(lang || "");
  const [searchBar, setSearchBar] = useState<boolean>(false);

  const handleSearch: void = (e) => {
    const dataSearch = CourseMockData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchInput(dataSearch);
    setSearchValue(e.target.value);
    console.log(searchInput);
  };
  return (
    <section className="min-h-screen mt-24 flex flex-row justify-center">
      <div className="mt-10 mr-28">
        <div className="my-2">
          <span>Rate's star: </span>
          <Select
            defaultValue="5 stars"
            style={{ width: 120 }}
            options={[
              { value: "1", label: "1 star" },
              { value: "2", label: "2 stars" },
              { value: "3", label: "3 stars" },
              { value: "4", label: "4 stars" },
              { value: "5", label: "5 stars" },
            ]}
          />
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-bold">Programming Languages</h2>
          {CourseMockData.map((item, index) => (
            <div>
              <label>
                <input
                  key={index}
                  type="checkbox"
                  value="python"
                  className="m-2"
                />
                {item.title}
              </label>
              <br />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-bold">Topic</h2>
          <div>
            <label>
              <input type="checkbox" value="python" className="m-2" />
              HTML and CSS
            </label>
            <br />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div onFocus={() => setSearchBar(true)} className="-z-0">
          <div className="intro-search-input m-2 relative  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
            <input
              className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-full h-11"
              type="search"
              style={{ backgroundColor: "white" }}
              placeholder="Search our tutorials, e.g. HTML"
              onChange={handleSearch}
              value={searchValue}
            />
            <div
              className="search-input-outline"
              onClick={() => window.location.replace(`search/${searchValue}`)}
            >
              <SearchOutlined className="text-xl m-2 mr-4  font-bold text-white" />
            </div>
          </div>
        </div>
        <h2 className="font-bold text-3xl">
          Result's searching "{searchValue}"
        </h2>
        {searchInput.length > 0 ? (
          <div className="m-1 p-5 w-full text-black">
            {searchInput.map((item, index) => (
              <div
                className="my-5 p-7 bg-white shadow-2xl shadow-green-300 rounded-xl flex flex-row justify-between items-center"
                onClick={() => navigate(`/courses/${item.title}`)}
              >
                <div className="flex flex-row items-center">
                  <img src="" width={70} height={70} className="rounded-full" />
                  <div className="flex flex-col ml-10">
                    <p className="text-xl font-bold">JavaScript Tutorial</p>
                    <p className="text-md">Course: {item.title}</p>
                    <p className="text-sm">Type: HTML and CSS</p>
                  </div>
                </div>
                <div className="ml-10 h-full float-right">
                  <p>29/7/2020</p>
                  <p>Rating: 5 star</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Result status="404" subTitle="No matching results found. " />
        )}
      </div>
    </section>
  );
};

export default SearchPage;

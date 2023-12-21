import { CourseLayout } from "../../layout/DefaultLayout";
import { Footer } from "../../layout/components/footer/Footer";
import { CourseMockData } from "../../mock/api";
import { editorOptions, htmlDefaultTemplate2 } from "../../util/config";
import { Button } from "../components/Button";
import "./course.scss";
import MEditor from "@monaco-editor/react";

const Navigation: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-10">
      <Button>Prev</Button>
      <Button>Next</Button>
    </div>
  );
};

const CodeBag: React.FC = () => {
  return (
    <div className="m-3 z-50">
      <p className="text-3xl font-bold">Easy Learning with JavaScript</p>
      <p>
        With our "Try it Yourself" editor, you can edit Python code and view the
        result.
      </p>
      <div className="bg-gray-200 rounded-md px-5 py-4 my-4 ">
        <p className="text-3xl font-bold z-50 my-3">Example</p>
        <MEditor
          options={editorOptions}
          theme={"white"}
          height="20vh"
          defaultLanguage="html"
          value={htmlDefaultTemplate2}
        />
        <div className="flex items-start">
          <Button onClick={() => console.log("test")}>Try it's yourself</Button>
        </div>
      </div>
    </div>
  );
};

const ExcerciseBag: React.FC = () => {
  return (
    <div className="m-3 z-50 shadow-green-500 shadow-2xl">
      <div className="bg-gray-900 rounded-md px-5 py-4 my-4 ">
        <p className="text-3xl font-bold z-50 my-3 text-white">Excerise</p>
        <div className="my-5">
          <p className="text-white">
            With our "Try it Yourself" editor, you can edit Python code and view
            the result.
          </p>
        </div>
        <MEditor
          options={editorOptions}
          theme={"white"}
          height="20vh"
          defaultLanguage="html"
          value={htmlDefaultTemplate2}
        />
        <div className="flex items-start">
          <Button onClick={() => console.log("test")}>Try it's yourself</Button>
        </div>
      </div>
    </div>
  );
};

const CourseContent: React.FC = () => {
  const data = CourseMockData.filter((item) => item.title === "JavaScript")[0];
  console.log(data);
  return (
    <CourseLayout>
      <section className="course mt-20">
        <div className="course-sider mt-20 ">
          {data?.lessons?.map((item) => (
            <div className="flex flex-col mt-3">
              <h2 className="text-lg font-bold mb-3 px-3">{item.title}</h2>
              <ul className="list-none ">
                {item.miniLesson?.map((item) => (
                  <li className="content-list list-none text-md my-0 py-2 px-3 hover:bg-gray-300 ">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="course-content ">
          <div className="content-page p-10">
            <h1 className="m-3 font-bold">Syntax</h1>
            <Navigation />
            <CodeBag />
            <CodeBag />
            <CodeBag />
            <CodeBag />
            <ExcerciseBag />
          </div>
          <Footer />
        </div>
      </section>
    </CourseLayout>
  );
};

export default CourseContent;

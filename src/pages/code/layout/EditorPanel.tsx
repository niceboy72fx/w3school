import MEditor from "@monaco-editor/react";
import { useContext } from "react";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { editorOptions } from "../../../util/config";
import { Context } from "../context";

export const EditorPanel = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="">
      <div className="tab-content " id="myTabContent">
        <div
          className="tab-pane fade show active h-100"
          id="html-pane"
          style={{ height: "90vh" }}
          role="tabpanel"
          aria-labelledby="html"
          tabIndex={0}
        >
          <MEditor
            options={editorOptions}
            theme={"vs-dark"}
            height="100%"
            defaultLanguage="html"
            value={localStorage.getItem("ms-playground-")}
            onChange={(value) => localStorage.setItem("ms-playground-", value)}
          />
        </div>
      </div>
    </div>
  );
};

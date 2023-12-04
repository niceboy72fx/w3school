import { useEffect } from "react";
import Header from "./components/Header";
import { htmlDefaultTemplate2 } from "./config";
import { Context } from "./context";
import useLocalStorage from "./hooks/useLocalStorage";
import { Layout } from "./layout/Layout";
import { IState } from "./model";
import { useDispatch } from "react-redux";
import { postCode } from "../../redux/reducer/codeRunner";
import { runCode } from "../../service/apiRadpidInstances";

const initialState: IState = {
  html: htmlDefaultTemplate2,
};
function CodePage() {
  const [state, dispatch] = useLocalStorage("state", initialState);
  const reduxDispatch = useDispatch();
  useEffect(() => {
    reduxDispatch(postCode({ props: { codePage: state, lang: "html" } }));
  }, [state]);
  return (
    <div
      className="App w-full"
      style={{ backgroundColor: "#1E1E1E", height: "100vh" }}
    >
      <main className="">
        <Header />
        <Context.Provider value={{ state, dispatch }}>
          <Layout />
        </Context.Provider>
      </main>
    </div>
  );
}

export default CodePage;

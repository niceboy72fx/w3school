import { useContext, useEffect, useState } from "react";
import { Context } from "../context";

export const PreviewPanel = () => {
  const state = localStorage.getItem("ms-playground-");
  const [srcDoc, setSrcDoc] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(state);
    const timeout = setTimeout(() => {
      const srcDoc = `
          ${state}
      `;
      setLoading(true);
      setSrcDoc(srcDoc);
    }, 1000);
    setLoading(false);
    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <div className="p-3 border-bottom mx-1 " style={{ height: "80vh" }}>
      {!loading ? (
        <div
          className="w-full  relative  preload  opacity-100 "
          style={{ height: "90vh" }}
        >
          <div className="loader rubix-cube">
            <div className="layer layer1 "></div>
            <div className="layer layer2"></div>
            <div className="layer layer3 color-1"></div>
            <div className="layer layer4"></div>
            <div className="layer layer5"></div>
            <div className="layer layer6"></div>
            <div className="layer layer7"></div>
            <div className="layer layer8"></div>
          </div>
        </div>
      ) : (
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "./preLoading.css";
import { useLoaderData } from "react-router";

const HookUseLoader: React.FC<{ component: React.ReactNode }> = ({
  component,
}) => {
  const data = useLoaderData();
  const [loaders, setLoaders] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaders(true);
    }, 3000);
  }, [data]);
  if (!loaders) {
    return (
      <div
        className="w-full  relative  preload  opacity-100 z-50 "
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
    );
  } else {
    return <div className="w-full h-full">{component}</div>;
  }
};

export default HookUseLoader;

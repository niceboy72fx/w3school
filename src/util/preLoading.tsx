import React from "react";
import "./preLoading.scss";
const LoadingScreen: React.FC = () => {
  return (
    <div className="preload  fade-out ">
      <div className="loader rubix-cube">
        <div className="layer layer1 bg-red-800"></div>
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
};

export default LoadingScreen;

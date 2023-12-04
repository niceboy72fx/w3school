import React from "react";
import Split from "react-split";
import { EditorPanel } from "./EditorPanel";
import { PreviewPanel } from "./PreviewPanel";


export const Layout = () => {
  return (
    <Split
      className="flex flex-row bg-white"
    
    >
      <EditorPanel />
      <PreviewPanel />
    </Split>
  );
};

import { Dispatch, SetStateAction } from "react";

export type EditorTheme = "light" | "dark";

export interface IState {
  html: string;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<SetStateAction<IState>>;
}

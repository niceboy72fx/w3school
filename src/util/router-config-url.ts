import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { emitPathVariable } from "../redux/reducer/pathVariable";

export const RouterConfig = () => {
  const dispatch = useDispatch();
  const { path } = useParams<string>();
  console.log(path);
  dispatch(
    emitPathVariable({
      pathAuth: path,
    })
  );
};

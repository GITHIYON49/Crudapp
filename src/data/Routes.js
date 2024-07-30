import { Path } from "./Path";
import { Home, Edituser, Adduser } from "../pages";
export const Routs= [
  {
    path: Path.home,
    element: <Home />,
  },
  {
    path: Path.add,
    element: <Adduser />,
  },
  {
    path: Path.edit,
    element: <Edituser />,
  },
];

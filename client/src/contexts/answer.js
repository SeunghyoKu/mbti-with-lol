import { createContext } from "react";

const PageContext = createContext({
  result: "",
  action: () => {},
});

export default PageContext;

import { createContext } from "react";

const PageContext = createContext({
  status: "start",
  action: () => {},
});

export default PageContext;

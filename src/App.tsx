import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index";

const App: React.FC<any> = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;

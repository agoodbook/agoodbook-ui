import Overview from "../pages/Overview";
import BrowserWindow from "../pages/BrowserWindow";
import DocTable from "../pages/DocTable";
import React from "react";
import CustomLayout from "../layout";

const routes: any = [
  {
    path: "/",
    element: <CustomLayout />,
    children: [
      {
        path: "",
        element: <Overview />,
        meta: {
          title: "组件总览",
        },
      },
      {
        path: "browser-window",
        element: <BrowserWindow />,
        meta: {
          title: "浏览器窗口",
        },
      },
      {
        path: "table",
        element: <DocTable />,
        meta: {
          title: "表格",
        },
      },
    ],
  },
];

export default routes;

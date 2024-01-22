import BrowserWindowPage from "../pages/BrowserWindowPage";
import DocTablePage from "../pages/DocTablePage";
import React from "react";
import CustomLayout from "../layout";
import OverviewPage from "../pages/OverviewPage";

const routes: any = [
  {
    path: "/",
    element: <CustomLayout />,
    children: [
      {
        path: "",
        element: <OverviewPage />,
        meta: {
          title: "组件总览",
        },
      },
      {
        path: "browser-window",
        element: <BrowserWindowPage />,
        meta: {
          title: "浏览器窗口",
        },
      },
      {
        path: "table",
        element: <DocTablePage />,
        meta: {
          title: "表格",
        },
      },
    ],
  },
];

export default routes;

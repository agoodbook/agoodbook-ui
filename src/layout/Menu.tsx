import { Menu } from "antd";
import React from "react";
import routes from "../routes";
import { useNavigate } from "react-router-dom";

const CustomMenu: React.FC = () => {
  const navigate = useNavigate();

  const sidebarList = routes[0].children.map((item: any, index: number) => ({
    key: item.path,
    label: item.meta.title,
  }));

  function handleMenuClick(path: string) {
    navigate(path);
  }
  return (
    <Menu
      onClick={({ key }) => handleMenuClick(key)}
      mode="inline"
      style={{ height: "100%" }}
      items={sidebarList}
    />
  );
};

export default CustomMenu;

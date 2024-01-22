import React from "react";
import { Typography, Divider } from "antd";
import BrowserWindow from "../../components/BrowserWindow";

const { Title} = Typography;

const BrowserWindowPage = () => {
  return (
    <div>
      <Title level={2}>模拟浏览器窗口</Title>
      <Divider />
      组件名：<code>BrowserWindow</code>
      <Divider />
      <BrowserWindow>
        <h1>Hallo</h1>
      </BrowserWindow>
    </div>
  );
};

export default BrowserWindowPage;

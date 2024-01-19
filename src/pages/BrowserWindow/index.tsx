import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const BrowserWindow = () => {
  return (
    <div>
      <Title level={2}>模拟浏览器窗口</Title>
      <Divider />
      组件名：<code>BrowserWindow</code>
      <Divider />
    </div>
  );
};

export default BrowserWindow;

import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const DocTable = () => {
  return (
    <div>
      <Title level={2}>表格</Title>
      <Divider />
      组件名：<code>DocTable</code>
      <Divider />
    </div>
  );
};

export default DocTable;

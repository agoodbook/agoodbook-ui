import React from "react";
import { Typography, Divider } from "antd";
import {DocTable} from "../../components";

const { Title} = Typography;

const DocTablePage = () => {
  return (
    <div>
      <Title level={2}>表格</Title>
      <Divider />
      组件名：<code>DocTable</code>
      <Divider />

      <DocTable style={{width: "500px"}} columns={[
        {
          title: "标签",
          dataIndex: "name",
          width: 150,
          render: (data) => {
            return <code>{data}</code>
          }
        },
        {
          title: "属性",
          dataIndex: "desc"
        },
        {
          title: "年龄",
          dataIndex: "age"
        }
      ]} dataSource={[
        {
          name: "p",
          desc: "段落标签",
          age: 18
        },
        {
          name: "link",
          desc: "链接标签",
          age: 19
        }
      ]}/>
    </div>
  );
};

export default DocTablePage;

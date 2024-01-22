import React from "react";

import {  Layout, theme } from "antd";
import LogoSvg from "src/assets/icons/logo.svg";
import styles from "./index.module.css";
import { Outlet } from "react-router-dom";
import CustomMenu from "./Menu";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", backgroundColor: "var(--primary-200)"}}>
        <div className={styles.logo}>
          <img src={LogoSvg} alt="logo" width={50} />
          <div className={styles["logo-text"]}>Components</div>
        </div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Layout
          style={{
            marginTop: "40px",
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <CustomMenu />
          </Sider>
          <Content style={{ padding: "0 24px", height: "calc(100vh - 210px)" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;

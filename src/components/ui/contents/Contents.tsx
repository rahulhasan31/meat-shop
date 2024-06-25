import { Layout } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const Contents = ({ children }: any) => {
  return (
    <Content
      style={{
        padding: 10,
        minHeight: "100vh",
      }}>
      {children}
    </Content>
  );
};

export default Contents;

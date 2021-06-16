import React, { Fragment } from "react";
import HeaderFC from "./Header/Main";
import LeftToolBar from "./LeftToolBar/Main";
import { Layout, Breadcrumb } from "antd";
const { Header, Sider, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const Index = ({ children }: Props) => {
  return (
    <Fragment>
      <Layout>
        <Header className="header" style={{ backgroundColor: "#C6E5F4" }}>
          <HeaderFC />
        </Header>
        <Layout>
          <Sider theme="light">
            <LeftToolBar />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default Index;

import Layout, { Header as AntdHeader, Content as AntdContent } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Logo = styled.div`
  float: left;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
`;

const Header = styled(AntdHeader)`
  padding: 0 8em;
`;

const Content = styled(AntdContent)`
  background: #fff;
  height: calc(100vh - 64px);
`;

const Page = () => {
  return (
    <Layout className="layout">
      <Header>
        <Logo>WikipediaMap</Logo>
      </Header>
      <Content>
        <Map />
      </Content>
    </Layout>
  );
};

export default Page;

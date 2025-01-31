"use client";

import styled from "styled-components";
import Sidebar from "../components/sidebar";
import MandateDetails from "../components/mandate-details";
import Overview from "../components/overview";
import Image from "@/node_modules/next/image";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  background: #f8f9fa;
  marginLeft:100,
  marginRight:100
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background: #4040b3;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export default function Page() {
  return (
    <div>
      <Header>
        <Image
          src={"/ic_baseline-insights.png"}
          width={20}
          height={20}
          style={{ marginRight: 12 }}
        />
        <Logo>ROI Forecast Engine</Logo>
      </Header>
      <Layout>
        <Sidebar />
        <MainContent>
          <MandateDetails />
          {/* <Overview /> */}
        </MainContent>
      </Layout>
    </div>
  );
}

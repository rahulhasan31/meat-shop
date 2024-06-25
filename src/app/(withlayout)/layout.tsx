"use client";
import { Layout, Menu, theme } from "antd";
import SidebarPage from "@/components/ui/SideBar/Sidebar";
import Contents from "@/components/ui/contents/Contents";

const DashBoardLayout = ({ children }: any) => {
  return (
    <>
      <Layout hasSider>
        <SidebarPage />
        <Contents>{children}</Contents>
      </Layout>
    </>
  );
};

export default DashBoardLayout;

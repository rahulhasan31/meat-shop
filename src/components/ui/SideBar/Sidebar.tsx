"use client";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useAuth } from "@/authService/authContext";

const { Header, Content, Footer, Sider } = Layout;

const SidebarPage = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href={"/dashboard"}>My Profile</Link>,
    },
    {
      key: "Checkout",
      icon: <UserOutlined />,
      label: <Link href={"/checkout"}>Checkout</Link>,
    },
    {
      key: "My Order",
      icon: <UserOutlined />,
      label: <Link href={"/myorder"}>My Order</Link>,
    },
  ];

  if (userRole === "admin") {
    items.push(
      {
        key: "all-user",
        icon: <UploadOutlined />,
        label: <Link href={`/all-user`}>All-User</Link>,
      },
      {
        key: "order-confirm",
        icon: <UploadOutlined />,
        label: <Link href={`/order-confirm`}>Order Confirm</Link>,
      }
    );
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default SidebarPage;

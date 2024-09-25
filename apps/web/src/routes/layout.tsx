import { Outlet } from "@modern-js/runtime/router";
import "@/styles/globals.css";
import Header from "@/components/layout/header/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

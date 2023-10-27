import { React } from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import { Outlet } from "react-router-dom";
import { SharedDataProvider } from "../../Hooks/Context/useSharedData";

function Layout() {
  return (
    <>
      <SharedDataProvider>
        <h1 className="my-4 text-5xl font-bold text-center ">DSA Tracker</h1>
        <Outlet />
        <BottomNavBar />
      </SharedDataProvider>
    </>
  );
}

export default Layout;

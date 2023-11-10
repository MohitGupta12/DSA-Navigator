import { React } from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import { Link, Outlet } from "react-router-dom";
import { SharedDataProvider } from "../../Hooks/Context/useSharedData";

function Layout() {
  return (
    <>
      <SharedDataProvider>
        <h1 className="mt-6 mb-2 text-4xl font-bold text-center md:text-5xl ">
          <Link to={"/"}>DSA Tracker</Link>
        </h1>
        <Outlet />
        <BottomNavBar />
      </SharedDataProvider>
    </>
  );
}

export default Layout;

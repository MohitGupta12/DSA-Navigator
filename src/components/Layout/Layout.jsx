import { React } from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import { Link, Outlet } from "react-router-dom";
import { SharedDataProvider } from "../../Hooks/Context/useSharedData";

function Layout() {
  return (
    <>
      <SharedDataProvider>
        <Link to={"/"}>
          <h1 className="mt-6 mb-2 text-4xl font-bold text-center md:text-5xl ">
            DSA Tracker
          </h1>
        </Link>
        <Outlet />
        <BottomNavBar />
      </SharedDataProvider>
    </>
  );
}

export default Layout;

import BottomNavBar from "../BottomNavBar/BottomNavBar";
import { Link, Outlet } from "react-router-dom";
import { SharedDataProvider } from "../../Hooks/Context/useSharedData";
import { Toaster} from 'sonner'


function Layout() {
  return (
    <>      
    <Toaster richColors  position="top-right" />

      <SharedDataProvider>
        <h1 className="mt-6 mb-2 text-4xl font-bold text-center md:text-5xl  " style ={{"textShadow": "0px 0px 16px rgba(255,255,255,0.71) "}}>
          <Link to={"/"}>DSA Tracker</Link>
        </h1>
        <Outlet />
        <BottomNavBar />
      </SharedDataProvider>
    </>
  );
}

export default Layout;

import BottomNavBar from "../BottomNavBar/BottomNavBar";
import { Link, useLocation, Route, Routes } from "react-router-dom";
import { SharedDataProvider } from "../../Hooks/Context/useSharedData";
import { Toaster } from "sonner";
import { Tooltip, Zoom } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import HomePage from "../../Pages/HomePage";
import QuestionPage from "../../Pages/QuestionPage.jsx";
import AboutPage from "../../Pages/AboutPage.jsx";
import ErrorPage from "../../Pages/ErrorPage";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Toaster richColors position="top-right" />

      <SharedDataProvider>
        <h1
          className="mt-6 mb-2 text-4xl font-bold text-center md:text-5xl  "
          style={{ textShadow: "0px 0px 6px rgba(255,255,255,0.71) " }}
        >
          <Tooltip TransitionComponent={Zoom} title="Home" arrow placement="right">
            <Link to={"/"}>DSA Quest Navigator</Link>
          </Tooltip>
        </h1>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location} >
            <Route exact path="/" element={<HomePage />} />
            <Route path="questions/:id" element={<QuestionPage/>} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="error" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
        <BottomNavBar />
      </SharedDataProvider>
    </>
  );
}

export default Layout;
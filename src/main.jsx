import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout.jsx";
import "./css/index.css";
import "./css/font.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import QuestionPage from "./Pages/QuestionPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "questions/:id", element: <QuestionPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*{
TODO: 
DONE => 1 - Search function in searchBar
DONE => 2 - Pick Random function in pickRandom button
3 - BookMarK Sorter function in bookmark button
DONE => 4 - Notes Modal on notes button
5 - Saving Data across website
6 - Update data based on saved data
7 - Theme(Dark & Light) And Final Styling
8 - Make About Page & Guide Pages
9 - Link All buttons in bottom navbar 
10 - Make it Responsive

}*/
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

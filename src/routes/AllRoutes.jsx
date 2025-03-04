import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import UploadDemo from "../pages/UploadDemo.jsx";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/uploaddemo" element={<UploadDemo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

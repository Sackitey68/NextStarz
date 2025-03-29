import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import UploadDemo from "../pages/UploadDemo.jsx";
import Audition from "../pages/Audition.jsx";
import Prizes from "../pages/Prizes.jsx";
import Judges from "../pages/Judges.jsx";
import Privacy from "../pages/Privacy.jsx";
import Faq from "../components/Faq.jsx";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/login" element={<Login />} />
      <Route path="/judges" element={<Judges />} />
      <Route path="/auditions" element={<Audition />} />
      <Route path="/uploaddemo" element={<UploadDemo />} />
      <Route path="/prizes" element={<Prizes />} />
      <Route path="/privacy" element={<Privacy />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

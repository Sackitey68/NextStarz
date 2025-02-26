import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

export default function AllRoutes() {
  return (
    <Routes>
      {/* Redirect root path to /main */}
      <Route path="/" element={<Navigate to="/main" replace />} />

      {/* Main routes */}
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Login />} /> {/* Assuming Register is handled by Login */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<PageNotFound />} /> {/* Add FAQ page if needed */}
      <Route path="/login" element={<Login />} />

      {/* Catch-all route for 404 errors */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
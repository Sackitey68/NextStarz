import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AllRoutes from "./routes/AllRoutes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

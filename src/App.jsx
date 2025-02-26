import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

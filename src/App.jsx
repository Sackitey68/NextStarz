import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";

export default function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

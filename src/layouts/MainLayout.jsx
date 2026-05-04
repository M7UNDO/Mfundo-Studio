import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

export default function MainLayout({children}) {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

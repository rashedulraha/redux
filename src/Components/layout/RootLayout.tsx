import Footer from "@/Components/shared/Footer/Footer";
import Navbar from "@/Components/shared/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;

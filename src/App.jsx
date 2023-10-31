import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import OTP from "./pages/otp";
import MobileNum from "./pages/otp";
import Bio from "./pages/bio";
import Menu from "./pages/menu";
import Accounts from "./pages/accounts";

function App() {
  return (
    <>
      <div className="flex items-center justify-center"
        style={{
          width: "100vw",
          height: "100vh",
        }}>
          <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobilenum" element={<MobileNum />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/accounts" element={<Accounts/>} />


        </Routes>
      </div>
    </>
  );
}

export default App;

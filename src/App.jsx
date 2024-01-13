import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import OTP from "./pages/otp";
import MobileNum from "./pages/otp";
import Bio from "./pages/bio";
import Menu from "./pages/menu";
import Accounts from "./pages/accounts";
import BankDetails from "./pages/BankDetails";
import Verify from "./pages/Verify"
import Thanks from "./pages/Thanks"

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
          <Route path="/details" element={<BankDetails />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/accounts" element={<Accounts/>} />
          <Route path="/thank" element={<Thanks/>} />

        </Routes>
      </div>
    </>
  );
}

export default App;

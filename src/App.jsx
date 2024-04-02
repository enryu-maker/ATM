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
import MiniStatement from "./pages/MiniStatements";
import  SavingsAccount  from "./pages/SavingAccount";
import UnionBank from './pages/bankaccount/UnionBank'
import Maha from './pages/bankaccount/Maha'
import CurrentAcc from './pages/CurrentAcc'
 import InfoBank from './pages/InfoBank'
 import Balanceenquiry from './pages/Balanceenquiry'

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
          <Route path="/mini" element={<MiniStatement/>} />
          <Route path="/saving" element={<SavingsAccount/>} />
           <Route path="/infoBank" element={<InfoBank/>} />
           <Route path="/union" element={<UnionBank/>} />
           <Route path="/maha" element={<Maha/>} />
           <Route path="/current" element={<CurrentAcc/>} />
           <Route path="/enquiry" element={<Balanceenquiry/>} />
          {/*<Route path="/statebank" element={<SbiBank/>} />
          <Route path="/mahabank" element={<MaharashtraBank/>} /> */}
        </Routes>
       
      </div>
    </>
  );
}

export default App;

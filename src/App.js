import React from "react";
import CashTransaction from "./components/CashTransaction";

import Transaction from "./components/Transaction";
// import Deposite from "./components/Deposite";
import Transfer from "./components/Transfer";
import Withdrawal from "./components/Withdrawal";
import PayBills from "./components/PayBills";
import AccountType from "./components/AccountType";
import Error404 from "./components/Error404";
import NumberPad from "./components/NumberPad";
import ChangePassword from "./components/ChangePassword";
import Balance from "./components/Balance";
import CustomNavigation from "./components/CustomNavigation";
import BankDetails from "./components/transferComponents/BankDetails";
import ConfirmationDialog from "./components/Interrupts/ConfirmationDialog";
import LoadingScreen from "./components/Interrupts/LoadingScreen";
import PasswordConfirmation from "./components/Interrupts/PasswordConfirmation";

export function App() {
  return (
    <div>
      {/* <Creat eButton text="transfer" customClass="transferBtn" /> */}
      {/* <CreateButton /> */}
      <Transaction />
      {/* <ChangePassword /> */}
      {/* <CashTransaction /> */}
      {/* <Deposite /> */}
      {/* <Transfer /> */}
      {/* <Withdrawal /> */}
      {/* <PayBills /> */}
      {/* <NumberPad /> */}
      {/* <Error404 /> */}
      {/* <Balance /> */}
      {/* <BankDetails /> */}
      {/* <ConfirmationDialog /> */}
      {/* <LoadingScreen /> */}
      {/* <PasswordConfirmation /> */}
      {/* <Navigation /> */}
    </div>
  );
}

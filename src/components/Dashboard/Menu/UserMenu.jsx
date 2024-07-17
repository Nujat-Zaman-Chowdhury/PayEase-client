
import MenuItem from "./MenuItem";
import { SiMoneygram } from "react-icons/si";
import { GiMoneyStack } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { AiOutlineTransaction } from "react-icons/ai";
const UserMenu = () => {
  return (
    <>
      <MenuItem
        label="Send Money"
        address="user/send-money"
        icon={SiMoneygram}
      ></MenuItem>
      <MenuItem
        label="Cash Out"
        address="user/cash-out"
        icon={GiTakeMyMoney}
      ></MenuItem>
      <MenuItem
        label="Cash In"
        address="user/cash-in"
        icon={GiMoneyStack}
      ></MenuItem>
      <MenuItem
        label="Balance Inquiry"
        address="user/balance-inquiry"
        icon={GrMoney}
      ></MenuItem>
      <MenuItem
        label="Transaction History"
        address="user/transaction-history"
        icon={AiOutlineTransaction}
      ></MenuItem>
    </>
  );
};

export default UserMenu;

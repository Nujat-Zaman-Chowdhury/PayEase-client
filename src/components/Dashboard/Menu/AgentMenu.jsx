import MenuItem from "./MenuItem";
import { GrMoney } from "react-icons/gr";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";


const AgentMenu = () => {
    return (
        <>
      <MenuItem
        label="Transaction Management"
        address="agent/transaction-management"
        icon={GrTransaction}
      ></MenuItem>
      <MenuItem
        label="Balance Inquiry"
        address="agent/balance-inquiry"
        icon={GrMoney}
      ></MenuItem>
      <MenuItem
        label="Transaction History"
        address="agent/transaction-history"
        icon={AiOutlineTransaction}
      ></MenuItem>
    </>
    );
};

export default AgentMenu;
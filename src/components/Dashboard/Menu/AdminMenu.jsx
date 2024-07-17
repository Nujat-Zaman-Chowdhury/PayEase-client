
import MenuItem from "./MenuItem";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiMonitor } from "react-icons/ci";

const AdminMenu = () => {
  return (
    <>
      {/* User Management */}
      <MenuItem
        label="User Management"
        address="admin/user-management"
        icon={RiUserSettingsLine}
      ></MenuItem>

      {/* System Monitoring */}
      <MenuItem
        label="System Monitoring"
        address="admin/system-monitoring"
        icon={CiMonitor}
      ></MenuItem>

    </>
  );
};

export default AdminMenu;
import {
  MailOutlined,
  NotificationsNoneOutlined,
  Search,
} from "@mui/icons-material";
import "./navbar.scss";
import { Avatar } from "@mui/material";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Search />
          <input  type="text" placeholder="Search Dashboard" />
        </div>
        <div className="items">
          <div className="item">
            <MailOutlined className="icon" />
            <div className="notify"></div>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
          </div>
          <div className="item">
            <Avatar/>
          </div>
        </div>
      </div>
    </div>
  );
};

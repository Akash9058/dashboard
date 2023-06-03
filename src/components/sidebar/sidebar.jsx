import "./sidebar.scss";
import {
  AccountBalanceOutlined,
  AssignmentOutlined,
  DiamondOutlined,
  DonutSmallOutlined,
  GridViewRounded,
  Home,
  MailOutline,
  NotificationsNone,
  PollOutlined,
  Settings,
  VolumeUpOutlined,
} from "@mui/icons-material";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <span>Clean</span>simple
        </span>
      </div>

      <div className="center">
        <ul>
            <p className="title">Admin Panel</p>
          <li>
            <Home />
            <span>Dashboard</span>
          </li>
          <li>
            <DiamondOutlined />
            <span>Listings</span>
          </li>
          <li>
            <AssignmentOutlined />
            <span>Order & Delivery</span>
          </li>
          <li>
            <PollOutlined />
            <span>Stats</span>
          </li>
          <li>
            <AccountBalanceOutlined />
            <span>Finances</span>
          </li>
          <li>
            <VolumeUpOutlined />
            <span>Marketing</span>
          </li>
          <li>
            <GridViewRounded />
            <span>Integrations</span>
          </li>
          <li>
            <DonutSmallOutlined />
            <span>Reports</span>
          </li>
          <li>
            <Settings />
            <span>Setting</span>
          </li>
          <p className="title">Insights</p>
          <li>
            <MailOutline />
            <span>Inbox</span>
          </li>
          <li>
            <NotificationsNone />
            <span>Notifications</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

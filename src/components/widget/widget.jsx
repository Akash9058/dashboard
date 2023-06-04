import { MoreVert, SportsVolleyball, TrendingDown } from "@mui/icons-material";
import "./widget.scss";

export const Widget = (props) => {
  return (
    <div className="widget" style={{ backgroundColor: props.color }}>
      <div className="logo">
        <SportsVolleyball className="icon" style={{ color: props.tiniColor }} />
      </div>
      <div className="left">
        <span className="title">{props.title}</span>
        <span className="counter">{props.counter}</span>
        <span className="time">{props.time}this week </span>
      </div>
      <div className="right">
        <MoreVert />
        <TrendingDown />
      </div>
    </div>
  );
}


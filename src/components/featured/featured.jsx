import React from "react";
import "./featured.scss";
import { Stats } from "./stats/Stats";
import { Cyclone, Diamond, Eject, Interests } from "@mui/icons-material";
export const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Sale progress</h1>
        <div className="detail">view details</div>
      </div>
      <div className="states">
        <Stats
          title="Clothing & Shoes"
          subTitle="Men & women"
          count="27.8%"
          color="rgba(218,210,226,1)"
          tiniColor="#e8cdff"
          iconColor="#ae7fde"
          icon=<Diamond/>
        />
        <Stats
          title="Jewelary items"
          subTitle="women"
          count="24.3%"
          color="rgba(255,252,241,1)"
          tiniColor="#ffeeb9"
          iconColor="#dcaf3a"
          icon=<Interests/>
        />
        <Stats
          title="Home & Living"
          subTitle="Men & women"
          count="21.1%"
          color="rgba(228,241,247,1)"
          tiniColor="#cdf0ff"
          iconColor="#63a8cf"
          icon=<Cyclone />
        />
        <Stats
          title="Electronic items"
          subTitle="Men & women"
          count="18.7%"
          color="rgba(233,234,244,1)"
          tiniColor="#c9cdec"
          iconColor="#7877e7"
          icon=<Eject/>
        />
      </div>
    </div>
  );
};

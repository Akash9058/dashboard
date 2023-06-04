import { Widget } from "../../components/widget/widget";
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import "./home.scss";
import React from "react";
import { Featured } from "../../components/featured/featured";
import { Chart, Charts } from "../../components/charts/charts";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgetContainer">
            <h3>Listing overview</h3>
          <div className="widgets">
            <Widget
              title="Active listings"
              counter="2536"
              time="765 "
              color="rgba(255,0,0,0.6)"
              tiniColor="blue"
            />
            <Widget
              title="Draft listings"
              counter="546"
              time="85 "
              color="rgba(162,198,229,0.8)"
              tiniColor="red"
            />
            <Widget
              title="Expired listings"
              counter="325"
              time="76 "
              color="rgba(250,195,214,0.8)"
              tiniColor="green"
            />
            <Widget
              title="Inactive listings"
              counter="246"
              time="25 "
              color="rgba(250,173,118,0.8)"
              tiniColor="brown"
            />
            <Widget
              title="Sold out"
              counter="674"
              time="47 "
              color="rgba(216,102,181,0.8)"
              tiniColor="black"
            />
          </div>
          <div className="chartes">
            <Charts /> 
            <Featured />
          </div>
        </div>
      </div>
    </div>
  );
};

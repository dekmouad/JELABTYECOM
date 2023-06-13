import React from "react";
import "./topbar.css";
import {useDispatch,useSelector} from "react-redux";
import { NotificationsNone } from "@material-ui/icons";
import { deconnecter } from "../../redux/apiCalls";
import { Link } from "react-router-dom";



export default function Topbar() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orderss);
  const notifications = orders.filter(order => order.status === "pending").length
// Function to handle the click event for disconnecting
  const handleClick = (e) => {
    e.preventDefault();
    deconnecter(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* Disconnect button */}
      <button className="butt" onClick={handleClick}>Disconnect</button>
        <div className="topLeft">
           {/* Logo */}
          <span className="logo"><b>JELABTY ADMIN</b></span>
        </div>
        <div className="topRight">
           {/* Link to orders */}
        <Link to={"/orders"}>
          <div className="topbarIconContainer">
            {/* Notifications icon */}
            <NotificationsNone />     
             {/* Display number of pending notifications */}
            <span className="topIconBadge">{notifications}</span> 
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

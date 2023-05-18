import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import AllProducts from "../AllProducts";

const Sidebar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <img
        src="https://icon-library.com/images/sidebar-icon/sidebar-icon-16.jpg"
        style={{ marginLeft: "70px", width: "30px", height: "20px" }}
        alt="Toggle Sidebar"
        onClick={toggleSidebar}
      />

      {sidebarVisible && (
        <div className="sidebar sidebar-vertical">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link
                href="/AllProducts"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                <Link href="/AllProducts">All Products</Link>
              </Nav.Link>
             
            </li>
            <li className="nav-item">
              <Nav.Link
                href="/men"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                <Link href="/men">Men</Link>
              </Nav.Link>
             
            </li>
            <li className="nav-item">
              <Nav.Link
                href="/women"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                <Link href="/women">Women</Link>
              </Nav.Link>
             
            </li>
       
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

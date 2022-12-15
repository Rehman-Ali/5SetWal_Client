import React from "react";
import adminlogo from "../../assets/images/logo-admin-5etwal.png";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="gr--main--sidebar">
      <Link to="/" className="branl--link">
        <img src={adminlogo} alt="admin" className="img-fluid" />
        <h3 className="admin--logo--title">5Etwal</h3>
      </Link>
      <div className="sidebar mt-3">
        <nav>
          <ul className="gr--nav-sidebar">
            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-gauge-high"></i>
                <p>dashboard</p>
              </NavLink>
            </li>
            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-users"></i>
                <p>users</p>
              </NavLink>
            </li>
            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-list"></i>
                <p>posts</p>
              </NavLink>
            </li>
            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-list"></i>
                <p>reports</p>
              </NavLink>
            </li>
            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-recycle"></i>
                <p>
                  recycle bin <i className="fa-solid fa-angle-left"></i>
                </p>
              </NavLink>
            </li>

            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-lock"></i>
                <p>change password</p>
              </NavLink>
            </li>

            <li className="nav--sidebar--item">
              <NavLink className="link">
                <i className="fa-solid fa-table"></i>
                <p>logout</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

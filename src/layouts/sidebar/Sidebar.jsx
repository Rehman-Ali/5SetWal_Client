import React from "react";
import adminlogo from "../../assets/images/logo-admin-5etwal.png";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="gr--main--sidebar">
      <Link to="/" className="branl--link">
        <img src={adminlogo} alt="admin" className="img-fluid" />
        <h3 className="admin--logo--title">5Etwal</h3>
      </Link>
      <div className="sidebar">
        <nav>
          <ul className="gr--nav-sidebar">
            {[1, 2, 3, 4, 5, 6].map((el, i) => {
              return (
                <li className="nav--sidebar--item" key={i}>
                  <Link className="link">
                    <i className="fa-solid fa-gauge-high"></i>
                    <span>dashboard</span>
                  </Link>
                </li>
              );
            })}
            {/* <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-gauge-high"></i>
                <p>dashboard</p>
              </Link>
            </li> */}
            {/* <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-users"></i>
                <p>users</p>
              </Link>
            </li>
            <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-list"></i>
                <p>posts</p>
              </Link>
            </li>
            <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-list"></i>
                <p>reports</p>
              </Link>
            </li>
            <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-recycle"></i>
                <p>
                  recycle bin <i className="fa-solid fa-angle-left"></i>
                </p>
              </Link>
            </li>

            <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-lock"></i>
                <p>change password</p>
              </Link>
            </li>

            <li className="nav--sidebar--item">
              <Link className="link">
                <i className="fa-solid fa-table"></i>
                <p>logout</p>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

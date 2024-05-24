import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";

const Header = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div>
      <nav
        style={{
          borderRadius: "12px",
          padding: "12px",
        }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <div>
            <a className="navbar-brand" href="#">
              Unibite
            </a>
          </div>

          <div
            style={{
              display: "flex",
              margin: "0 15px",
            }}
          >
            {user && (
              <h4 style={{ marginRight: "12px" }}>
                {"Welcome,  " + user?.fullName}
              </h4>
            )}
            <button
              onClick={user ? logout : () => navigate("/login")}
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

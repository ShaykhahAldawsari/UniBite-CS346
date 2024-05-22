import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import giphy from "../../images/giphy (2).gif";
import applePay from "../../images/apple2.svg.png";

const PickUpReciept = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (state?.items) {
      setItems(state.items);
    }
  }, []);

  return (
    <div className="body">
      <div className="receipt anim-typewriter">
        <h3 style={{ marginBottom: "40px" }}>Receipt</h3>
        <img
          src={giphy}
          alt="GIF eats his phone"
          width="120px"
          style={{ marginLeft: "120px" }}
        />
        <div style={{ marginBottom: "10px" }}>
          {items &&
            items.length > 0 &&
            items.map((item) => {
              return (
                <h4 className="orders">
                  <pre>
                    {item?.title ?? ""}
                    {"  $"}
                    {item?.itemPrice ?? "" + "  "}
                  </pre>
                </h4>
              );
            })}

          <h3 style={{ marginTop: "20px", marginBottom: "30px" }}>
            <pre>{"sub total $ " + state?.total ?? ""}</pre>
          </h3>
        </div>
        <div>
          <p>
            <pre>
              {"Phone number: " + state?.mobileNumber ?? ""} <br />
              {"building number: " + state?.building ?? ""}
            </pre>
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/order-confirmation");
            }}
            className="btn btn-info"
            style={{ marginLeft: "100px", width: "150px" }}
          >
            <img src={applePay} alt="apple-pay" width="60px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickUpReciept;

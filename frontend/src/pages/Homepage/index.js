import React, { useState, useEffect } from "react";
import "../../restaurentModel.css";

import burgers from "../../images/burdemo.png";
import pancakes from "../../images/4053445_breakfast_hotcakes_kitchen_pancakes_restaurant_icon.png";
import cupcake from "../../images/4053430_cupcake_dessert_food_gastronomy_sweet_icon.png";
import pizza from "../../images/4053443_fast_food_gastronomy_pizza_restaurant_icon.png";
import coffee from "../../images/4053443_fast_food_gastronomy_pizza_restaurant_icon.png";

import OrderNowCard from "../../components/OrderNowCard";

import useItems from "../../hooks/useItems";

const Homepage = () => {
  const { fetchItems } = useItems();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchItems();
      if (response) {
        setItems(response);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header></header>
      <main>
        <section class="search-container">
          <input type="search" placeholder=" Search" />
          <div class="categories">
            <button>
              <img
                src={pancakes}
                alt="restuarnt icon"
                width="25"
                height="25"
                fill="currentColor"
              />
            </button>
            <button>
              <img
                src={pizza}
                alt="food icon"
                width="25"
                height="25"
                fill="currentColor"
              />
            </button>
            <button>
              <img
                src={cupcake}
                alt="pizza icon"
                width="25"
                height="25"
                fill="currentColor"
              />
            </button>
            <button style={{ color: "#fffefe" }}>
              <img src={coffee} alt="cup of coffe" width="25" height="25" />
            </button>
          </div>
        </section>
        {loading ? (
          <div style={{ margin: "auto" }}>Loading...</div>
        ) : items.length === 0 ? (
          <>No items found</>
        ) : (
          <div>
            <div className="main-menu">
              {items &&
                items.map((item) => {
                  return (
                    <OrderNowCard
                      itemPrice={item?.itemprice ?? ""}
                      itemCals={item?.itemkcals ?? ""}
                      imageSrc={item?.itemIMG ?? burgers}
                      title={item?.itemname}
                      desc={"A delicious and fulfilling super snack"}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Homepage;

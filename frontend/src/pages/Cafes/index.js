import React, { useState, useEffect } from "react";
import Card from "../../components/Card";

import unnamed from "../../images/unnamed.png";

import useCafes from "../../hooks/uesCafes";
import Header from "../../components/Header";

const Cafes = () => {
  const { fetchItems } = useCafes();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [tempItems, setTempItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchItems();
      if (response) {
        setItems(response);
        setTempItems(response);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (query == "") {
      setItems(tempItems);
      return;
    }
    const filteredItems = tempItems.filter((item) =>
      item?.cafename?.includes(query)
    );
    setItems(filteredItems);
  };

  return (
    <main>
      <header>
        <Header />
      </header>

      {loading ? (
        <>Loading...</>
      ) : (
        <div>
          <section class="search-container">
            <input
              type="search"
              placeholder=" Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </section>
          <section className="cards-container">
            {items &&
              items.length > 0 &&
              items.map((cafe) => (
                <Card
                  imageSrc={cafe?.cafeimg ?? unnamed}
                  title={cafe?.cafename ?? "N/A"}
                  rating="5.0"
                  location={cafe?.cafelocation ?? ""}
                />
              ))}
          </section>
        </div>
      )}
    </main>
  );
};

export default Cafes;

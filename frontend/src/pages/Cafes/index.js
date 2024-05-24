import React, { useState, useEffect } from "react";
import Card from "../../components/Card";

import unnamed from "../../images/unnamed.png";

import useCafes from "../../hooks/uesCafes";
import Header from "../../components/Header";

const Cafes = () => {
  const { fetchItems } = useCafes();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchItems();
      if (response) {
        setItems(response);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main>
      <header>
        <Header />
      </header>

      {loading ? (
        <>Loading...</>
      ) : (
        <section className="cards-container">
          {items &&
            items.length > 0 &&
            items.map((cafe) => (
              <Card
                imageSrc={cafe?.cafeimg ?? unnamed}
                title={cafe?.cafename ?? "N/A"}
                rating="5.0"
              />
            ))}
        </section>
      )}
    </main>
  );
};

export default Cafes;

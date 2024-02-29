import React, { useState, useEffect } from "react";
const CardItems = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const fetchAapi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
      console.log("result data", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAapi();
  }, []);

  const handleFunction = (e) => {
    setValue(e.target.value);
    console.log("event", e);

    const filtered = data.filter((items) =>
      items.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filtered);
  };
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          value={value}
          onChange={handleFunction}
          placeholder="search by name"
        />
        {filtered.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardItems;

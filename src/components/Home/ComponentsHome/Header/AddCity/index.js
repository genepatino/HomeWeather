import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import constants from "../../../../utility/constant/constants";

import "./addcity.scss";

const AddCity = () => {
  const [t] = useTranslation("global");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlCities = `https://api.openweathermap.org/data/2.5/find?q=${search}&appid=${constants.apiWeather}`;
        const response = await fetch(urlCities);
        const data = await response.json();
        console.log("dataCities", data);
      } catch (error) {
        console.error();
      }
    };
    return () => {
      if (search !== "") {
        fetchData();
      }
    };
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="add city"
        value={search}
        onChange={handleChange}
      ></input>
      {/* <button onClick={fetchData}>busqueda</button> */}
    </div>
  );
};

export default AddCity;

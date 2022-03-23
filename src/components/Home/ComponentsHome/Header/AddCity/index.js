import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import constants from "../../../../utility/constant/constants";
import debounce from "../../../../utility/functions/debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import allweather from "../../../../../images/allweather.png";
import "./addcity.scss";

const AddCity = () => {
  const [t] = useTranslation("global");
  const [searchCities, setSearchCities] = useState(null);

  const updateValue = (e) => {
    const value = e.target.value;
    const fetchData = async () => {
      try {
        const urlCities = `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${constants.apiWeather}`;
        const response = await fetch(urlCities);
        const data = await response.json();
        setSearchCities(data.list);
        console.log(searchCities);
      } catch (error) {
        console.error();
      }
    };
    fetchData();
  };
  const renderListCities = debounce(updateValue, 1000);

  return (
    <div
      className={classNames("search-cities-container", {
        visible: searchCities,
      })}
    >
      <input
        className={classNames("input-search", { visible: searchCities })}
        type="text"
        placeholder="Search city"
        onChange={renderListCities}
      />
      <FontAwesomeIcon className="search-icon" icon="fa-magnifying-glass" />

      <ul className={classNames("ul-container", { visible: searchCities })}>
        {searchCities &&
          searchCities.map((e) => {
            return (
              <li key={e.id}>
                <span>
                  {e.name}, {e.sys.country}
                </span>
                <span>{e.weather.map((e) => e.description)}</span>
                <img src={allweather} alt="" className="img" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AddCity;

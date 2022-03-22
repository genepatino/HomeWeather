import React from "react";
import { connect } from "react-redux";
import allweather from "../../../../images/allweather.png";

import classNames from "classnames";
import "./citiestoshow.scss";

const CitiesToShow = ({ dataListCities, key }) => {
  /*  console.log(dataListCities);
  const visible = dataListCities.length > 0; */

  return (
    <div
    /*  className={classNames("list-container", {
       show: visible,
     })} */
    >
      <ul className="ul-list-container">
        {dataListCities.map((key) => {
          return (
            <li className="list" key={key.id}>
              <div>
                <span>{key.name}</span>, <span>{key.sys.country}</span>
              </div>
              <div className="temp">
                {Math.trunc(key.main.temp - 273.15) + "°C"} ó{" "}
                {Math.trunc(((key.main.temp - 273.15) * 9) / 5 + 32) + "°F"}
              </div>
              <div>
                <img
                  style={{ width: "20px" }}
                  src={allweather}
                  alt=""
                  className="img-icon"
                ></img>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataListCities: state.appReducer.dataListCities,
  };
};
export default connect(mapStateToProps, null)(CitiesToShow);

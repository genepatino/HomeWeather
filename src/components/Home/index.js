import React from "react";
import { connect } from "react-redux";
import AppActions from "../../redux/reducers/appReducer";
/* import firebaseConfig from "../../firebase/firebaseConfig"; */
/* import { getAuth, signOut } from "firebase/auth"; */
import Header from "./ComponentsHome/Header";
import CitySite from "./ComponentsHome/CitySite";
/* import CitiesToShow from "./Components-Home/CitiesToShow"; */

import mapaMundi from "../../images/map.png";

import "./home.scss";

const Home = ({
  user,
  setUser,
  setData,
  setDataListCities,
  dataListCities,
}) => {
  /* useEffect(() => {
    setDataListCities();
  }, [setDataListCities]); */

  /* const formSchema = Yup.object({
    location: Yup.string().required(t("labels.require-general")),
  }); */

  /* const visible = dataListCities.length > 0; */

  return (
    <>
      {user !== null && (
        <div className="home-container">
          <div className="image-container">
            <img className="image" src={mapaMundi} alt=""></img>
          </div>

          <div className="call-weather-container">
            <Header />

            <div className="call-api">
              <div className="item-a">
                <CitySite />
              </div>
              <div className="item-b">item-b</div>
              <div className="item-c">item-c</div>
              <div className="item-d">item-d</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.appReducer.user,
    dataListCities: state.appReducer.dataListCities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(AppActions.setUser(user)),
    setData: (data) => dispatch(AppActions.setData(data)),
    setDataListCities: (dataListCities) =>
      dispatch(AppActions.setDataListCities(dataListCities)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

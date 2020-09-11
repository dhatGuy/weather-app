import React, { Component } from "react";
import styled from "styled-components";
import Info from "./Info";
import Search from "./Search";
import ForecastCard from "./ForecastCard";
import MoreInfo from "./MoreInfo";
import WeatherIcon from "./WeatherIcon";
import Loader from "react-loader-spinner";
import background from "../assets/background.png";
import Footer from "./Footer";
import Header from "./Header";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const Container = styled.div`
  background: #6a097d;
  border-radius: 10px;
  width: 60%;
  position: relative;
  margin: 10px auto;
  flex: 1;

  @media (max-width: 992px) {
    width: 95%;
  }
`;

const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Weather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  min-height: 90%;
  border-radius: 10px;
  box-shadow: inset 0 0 0 100vw rgba(106, 9, 125, 0.6);
  background: url(${background}) center center no-repeat;
  background-size: cover;
`;

class Main extends Component {
  state = {
    inputValue: "",
    weather: null,
    time: 0,
    location: "",
    info: null,
    denied: false,
    loading: true,
    error: false,
    errorMsg: "",
    forecast: null,
  };

  getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getForecast = async () => {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue}&appid=${API_KEY}&units=metric`
    );

    const data = await request.json();
    if (data.cod === "200") {
      const list = [
        data.list[0],
        data.list[8],
        data.list[16],
        data.list[24],
        data.list[32],
      ];
      this.setState({ forecast: list, error: false, errorMsg: "" });
    } else {
      this.setState({ errorMsg: data.message, loading: false, error: true });
    }
    return data;
  };

  loadCurrentWeather = async (lat, lon) => {
    this.setState({ loading: true });
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const req2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    let res = await req.json();
    let res2 = await req2.json();

    const list = [
      res2.list[0],
      res2.list[8],
      res2.list[16],
      res2.list[24],
      res2.list[32],
    ];

    if (res.cod === 200) {
      this.setState({
        weather: res.weather[0],
        time: res.dt,
        location: res.name,
        info: res.main,
        forecast: list,
        error: false,
        loading: false,
        errorMsg: "",
      });
    } else {
      console.log(res);
      this.setState({
        loading: false,
        error: true,
        errorMsg: res.message,
      });
    }
  };

  loadWeather = async () => {
    this.getPosition()
      .then((position) => {
        const { longitude, latitude } = position.coords;
        this.loadCurrentWeather(latitude, longitude);
      })
      .catch((err) => this.setState({ denied: true, loading: false }));
  };

  handleSearch = async (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    this.getForecast();
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${API_KEY}&units=metric`
    );
    let res = await req.json();
    console.log(res);
    if (res.cod === 200) {
      this.setState({
        weather: res.weather[0],
        time: res.dt,
        location: res.name,
        info: res.main,
        error: false,
        loading: false,
        inputValue: "",
        denied: false,
      });
    } else {
      this.setState({
        error: true,
        inputValue: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  componentDidMount() {
    if ("geolocation" in navigator) {
      this.loadWeather();
    } else {
      console.log("Not available");
    }
  }

  render() {
    const {
      time,
      weather,
      location,
      info,
      loading,
      inputValue,
      forecast,
      errorMsg,
      error,
      denied,
    } = this.state;
    if (loading) {
      return (
        <LoaderContainer>
          <Loader type="TailSpin" color="#00005c" height={100} width={100} />
        </LoaderContainer>
      );
    }
    return (
      <>
        <Header />
        <Container>
          <Search
            input={inputValue}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
            error={error}
            errorMsg={errorMsg}
          />
          {denied ? (
            <Weather>
              <p>Permission denied</p>
            </Weather>
          ) : (
            <Weather>
              <WeatherIcon
                position="flex-end"
                condition={weather.icon}
                size="12em"
              />
              <Info
                time={time}
                location={location}
                temp={info.temp}
                description={weather.description}
                main={weather.main}
              />
              <MoreInfo info={info} />
              <ForecastCard forecast={forecast} />
            </Weather>
          )}
        </Container>
        <Footer />
      </>
    );
  }
}

export default Main;

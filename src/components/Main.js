import React, { Component } from "react";
import styled from "styled-components";
import Info from "./Info";
import Search from "./Search";
import ForecastCard from "./ForecastCard";
import MoreInfo from "./MoreInfo";
import WeatherIcon from "./WeatherIcon";
import background from "../assets/background.png";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const Container = styled.div`
  background: #6a097d;
  border-radius: 10px;
  width: 95%;
  position: relative;
  margin: 10px auto;
  flex: 1;
`;

const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90%;
  border-radius: 10px;
  background-image: url(${background});
  background-size: cover;
  box-shadow: -12px 12px 24px #41054c, 12px -12px 24px #930dae;
`;

class Main extends Component {
  state = {
    inputValue: "",
    weather: {},
    time: 0,
    location: "",
    info: {},
    denied: false,
    loading: true,
    error: false,
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
    const list = [
      data.list[0],
      data.list[8],
      data.list[16],
      data.list[24],
      data.list[32],
    ];
    this.setState({ forecast: list });
    console.log(data);
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
    console.log(res2);

    if (res.cod === 200) {
      this.setState({
        weather: res.weather[0],
        time: res.dt,
        location: res.name,
        info: res.main,
        forecast: list,
        error: false,
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
        error: true,
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
      console.log("Available");
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
    } = this.state;
    if (loading) return null;
    return (
      <Container>
        <Search
          input={inputValue}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        />
        <Weather>
          <WeatherIcon condition={weather.icon} />
          <Info
            time={time}
            location={location}
            temp={info.temp}
            description={weather.description}
          />
          <MoreInfo info={info} />
          <div style={{ display: "flex" }}>
            <ForecastCard forecast={forecast} />
          </div>
        </Weather>
      </Container>
    );
  }
}

export default Main;

import React from "react";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CurrentWeather from "./Components/CurrentWeather";
import { WeatherProvider, useWeatherContext } from "./context/WeatherContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/Loader/Loader";

const AppContent = () => {
  const { loading } = useWeatherContext();

  return (
    <Container>
      <Navbar />
      {loading ? <Loader /> : <CurrentWeather />}
      <Footer />
    </Container>
  );
};

const App = () => {
  return (
    <WeatherProvider>
      <AppContent />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </WeatherProvider>
  );
};

export default App;

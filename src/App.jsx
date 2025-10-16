// import React from 'react';
// import Container from './Components/Container';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import CurrentWeather from './Components/CurrentWeather';

// const App = () => {
//   return (
//     <Container>
//       <Navbar></Navbar>
//       <CurrentWeather></CurrentWeather>
//       <Footer></Footer>
//     </Container>
//   );
// };

// export default App;

import React from "react";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CurrentWeather from "./Components/CurrentWeather";
import { WeatherProvider } from "./context/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <Container>
        <Navbar />
        <CurrentWeather />
        <Footer />
      </Container>
    </WeatherProvider>
  );
};

export default App;

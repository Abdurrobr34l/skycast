import React from 'react';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import CurrentWeather from './Components/CurrentWeather';

const App = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <CurrentWeather></CurrentWeather>
    </Container>
  );
};

export default App;
import React from 'react';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import CurrentWeather from './Components/CurrentWeather';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <CurrentWeather></CurrentWeather>
      <Footer></Footer>
    </Container>
  );
};

export default App;
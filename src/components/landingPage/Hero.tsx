import React from 'react';
import Container from '../Container';
import Nav from './Nav';
import DotPattern from '../DotPatterns';

const Hero = () => {
  return (
    <Container className="min-h-screen relative">
      {/* <DotPattern /> */}
      <Nav />
    </Container>
  );
};

export default Hero;

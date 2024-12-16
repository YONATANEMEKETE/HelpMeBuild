import React from 'react';
import Container from '../Container';
import Nav from './Nav';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <Container className="min-h-screen pb-20 relative overflow-clip">
      <Nav />
      <HeroContent />
      <div className="absolute z-30 w-full bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-mybg via-mybg to-transparent"></div>
    </Container>
  );
};

export default Hero;

import React from 'react';
import type { NextPage } from 'next';
import Map from './components/Map';

const HomePage: NextPage = () => {
  const mapConfig = {
    center: { lat: 41.3874, lng: 2.1686 }, // Coordinates for Barcelona
    zoom: 12,
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map {...mapConfig} />
    </div>
  );
};

export default HomePage;

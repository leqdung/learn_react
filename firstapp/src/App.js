import React from 'react';
import './App.css';
import CardList from './components/card/CardList.js';
import styled from 'styled-components';
import Card from './components/card/Card';

function App() {
  return (
    <div>
      <CardList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}

export default App;

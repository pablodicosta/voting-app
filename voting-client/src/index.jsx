import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

const callback = (name) => console.log(name);

ReactDOM.render(
  <Voting pair={pair} vote={callback} />,
  document.getElementById('app')
);

import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection',
  'Node of type rule not supported as an inline style'
]);

export default function App() {
  return <Routes />;
}

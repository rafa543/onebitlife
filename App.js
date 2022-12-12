import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle={"auto"}/>
      <Routes />
    </>
  )
}
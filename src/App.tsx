import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.patikaStoreTitle}>PatikaStore - HOMEWORK1</Text>
      <SearchBar />
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  patikaStoreTitle: {
    marginLeft: 9,
    fontSize: 20,
    color: 'purple',
  },

});

export default App;
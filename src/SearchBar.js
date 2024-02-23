import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <TextInput style={styles.searchBar} placeholder="Search..." />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
});

export default SearchBar;
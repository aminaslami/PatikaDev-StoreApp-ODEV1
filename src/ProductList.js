import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import productData from './productData.json';

const ProductList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.imgURL }} />
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      <Text>{item.inStock ? 'In Stock' : 'Out of Stock'}</Text>
    </View>
  );

  return (
    <FlatList
      data={productData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Renders two columns
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    border: '5px',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default ProductList;
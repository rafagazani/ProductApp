import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProductById } from '../api';

const ProductDetailScreen = ({ route }) => {
  const [product, setProduct] = useState(null);
  const { productId } = route.params;

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductById(productId);
      setProduct(response.data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.stock}>Stock: {product.stock}</Text>
      <Text style={styles.rating}>Rating: {product.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginTop: 8,
  },
  stock: {
    fontSize: 16,
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default ProductDetailScreen;
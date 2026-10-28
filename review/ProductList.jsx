import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text } from 'react-native';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products?category=${category}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    products.push({ ...product, inCart: true });
    setProducts(products);
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={() => addToCart(item)}>
          <Text>{item.name}</Text>
        </Pressable>
      )}
    />
  );
}

export default ProductList;

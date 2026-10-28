import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import type { Product } from '@libs/core-delivery';

type Props = {
  categoryId: string;
  storeId: string;
};

export function ProductList({ categoryId, storeId }: Props) {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/products?categoryId=${categoryId}&storeId=${storeId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [categoryId]);

  const addToCart = (product: Product) => {
    cart.push({ sku: product.sku, qty: 1 });
    setCart(cart);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Text style={{ color: '#008061', fontSize: 18 }}>
        Items in cart: {cart.length}
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => addToCart(item)}>
            <Text>
              {item.name} - {item.price.display}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

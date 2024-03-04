import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
const Demo2 = () => {
  const [products, SetProducts] = useState();
  async function allApi() {
    try {
      let response = await fetch('https://dummyjson.com/products');
      response = await response.json();
      SetProducts(response?.products);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    allApi();
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles?.container}>
        {products &&
          products?.map((item, index) => (
            <View key={item?.id} style={styles?.productContainer}>
              <Text style={styles?.textView}>{item?.title}</Text>
              <Image
                style={styles?.imageView}
                resizeMode="contain"
                source={{uri: item?.images?.[0]}}></Image>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Demo2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 40,
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: 100,
    height: 100,
  },
  textView: {
    fontSize: 16,
    lineHeight: 20,
    color: 'black',
  },
});

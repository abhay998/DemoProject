import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Demo1 = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <TouchableOpacity
        style={{backgroundColor: 'red', borderRadius: 20}}
        onPress={() => navigation?.navigate('Demo2')}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 25,
            color: 'white',
            padding: 10,
          }}>
          Navigate to the Product list Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Demo1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

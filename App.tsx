import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Demo1 from './src/Demo1';
import Demo2 from './src/Demo2';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const Stack = createNativeStackNavigator();
  console.log('hello');
  console.log('hello');
  console.log('hello');

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Demo1"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Demo1"
              component={Demo1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Demo2"
              component={Demo2}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});

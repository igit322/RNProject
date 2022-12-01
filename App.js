import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons'

import Start from "./screens/Start";
import Main2 from "./screens/Main2";

const Stack = createStackNavigator();
// const navigation = useNavigation();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start Page" component={Start} />
          <Stack.Screen name="Main2" component={Main2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ListScreen from "./screens/ListScreen";
// import BookmarkScreen from "./screens/BookmarkScreen";

// const Stack = createNativeStackNavigator();

// const NavigationApp = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen name="Bookmark" component={BookmarkScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default NavigationApp;





// const Navigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: "#424242",
//           inactiveTintColor: "#9e9e9e",
//           showLabel: false,
//           borderTopColor: "#bdbdbd",
//           backgroundColor: "#ffffff",
//         }}
//       >
//         <Tab.Screen
//           name="List"
//           component={ListScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="list" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Bookmark"
//           component={BookmarkScreen}
//           options={{
//             tapBarIcon: ({ color, size }) => (
//               <Icon name="heart" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default createAppContainer(TabNavigator);

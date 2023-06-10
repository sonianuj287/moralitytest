import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  Share,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Splash from "./Screens/Splash"
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import SliderScreen from "./Screens/Slider"
import Score from "./Screens/Score"

import AdminHome from "./Screens/AdminHome"
import AdminLogin from "./Screens/AdminLogin"
import AdminScoreView from "./Screens/AdminScoreView"
import apiKeys from './config/keys';
import firestore from '@react-native-firebase/firestore';
import * as firebase from 'firebase';

import { GoogleSignin } from '@react-native-community/google-signin';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



export default function App(props) {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true
      }}>
        <Stack.Screen name="Splash"
          component={Splash}
          options={{
            headerShown: false
          }}
          
        />

        <Stack.Screen name="Login"
          component={Login} />
        <Stack.Screen name="Home"
          component={Home}
          
           />
        <Stack.Screen name="SliderScreen"
          component={SliderScreen} />
        <Stack.Screen name="Score"
          component={Score} />

        <Stack.Screen name="Admin Login"
          component={AdminLogin} />
        <Stack.Screen name="Admin Home"
          component={AdminHome} />
        <Stack.Screen name="View Score"
          component={AdminScoreView} />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,

    marginHorizontal: 30
  },


});


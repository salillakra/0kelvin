import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import "../global.css";


import React, { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

function _layout() {

    const [loaded, error] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }


    return (
        <Slot />
    )
}

export default _layout


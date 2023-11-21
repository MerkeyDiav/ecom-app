import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import SplashScreen from "react-native-splash-screen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavigation from './app/navigation/BottomTabNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontIsLoaded] = useIcon({
  //   regular: require("./app//assets/fonts/Poppins-Regular.ttf"),
  //   light: require("./app/assets/fonts/Poppins-Light.ttf"),
  //   bold: require("./app/assets/fonts/Poppins-Bold.ttf"),
  //   medium: require("./app/assets/fonts/Poppins-Medium.ttf"),
  //   extrabold: require("./app/assets/fonts/Poppins-ExtraBold.ttf"),
  //   regular: require("./app/assets/fonts/Poppins-Regular.ttf"),
  // })


  // const onLayoutRootView = useCallback(async() => {
  //     if(fontIsLoaded) {
  //       await SplashScreen.hideAsync()
  //     }
  // }, [fontIsLoaded]); // Empty dependency array
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= 'bottom Nav'
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  },
  textStyles: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black'
  }
});

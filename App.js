import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

import { Platform } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loggedIn, setLoggedIn] = useState(true)


  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName={loggedIn ? "HomeScreen" : "LoginScreen"}>
              <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

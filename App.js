import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
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

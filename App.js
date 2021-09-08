import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import EatScreen from "./screens/EatScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <Stack.Navigator initialRouteName="homeScreen">
              <Stack.Screen
                name="homeScreen"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="mapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="eatScreen"
                component={EatScreen}
                options={{
                  headerShown: false,
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

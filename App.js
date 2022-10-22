import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HalamanDepan from "./components/page/halamanDepan";
import Hasil from "./components/page/Hasil";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HalamanDepan} />
        <Stack.Screen name="hasil" component={Hasil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

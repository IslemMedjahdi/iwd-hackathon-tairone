import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Suggestions from "./app/screens/Suggestions";
import Notification from "./app/screens/Notification";
import Chat from "./app/screens/Chat";


//redux
//import { Provider } from "react-redux";
//import { store } from "./app/redux/store";

//stack
const Stack = createNativeStackNavigator();

import { db } from "./firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";

import { useEffect, useState } from "react";
export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Suggetions" component={Suggestions} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

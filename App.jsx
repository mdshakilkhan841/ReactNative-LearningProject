import React from "react";
import HomePage from "./src/pages/HomePage";
import FlashCard from "./src/pages/FlashCard";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Flash Card" component={FlashCard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "./routes";
import HomeScreen from "./screens/HomeScreen";
import TweetDetailScreen from "./screens/TweetDetailScreen";
import TweetScreen from "./screens/TweetScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const NavStack = () => (
    <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name={"Home"} component={HomeScreen} />
        <RootStack.Screen
            name={"Tweet"}
            component={TweetScreen}
        />
        <RootStack.Screen name={"TweetDetail"} component={TweetDetailScreen} />
    </RootStack.Navigator>
);

const App: React.FC = () => (
    <NavigationContainer>
        <NavStack />
    </NavigationContainer>
);

export default App;

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import TweeterContext from "./src/context";
import { useTweets } from "./src/hooks/useTweets";
import { RootStackParamList } from "./src/routes";
import HomeScreen from "./src/screens/HomeScreen";
import TweetActivityScreen from "./src/screens/TweetActivityScreen";
import TweetDetailScreen from "./src/screens/TweetDetailScreen";
import TweetScreen from "./src/screens/TweetScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const NavStack = () => (
    <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name={"Home"} component={HomeScreen} />
        <RootStack.Screen
            name={"Tweet"}
            component={TweetScreen}
        />
        <RootStack.Screen name={"TweetActivity"} component={TweetActivityScreen} />
        <RootStack.Screen name={"TweetDetail"} component={TweetDetailScreen} />
    </RootStack.Navigator>
);

const App: React.FC = () => {
    const tweets = useTweets();
    const { getItem } = useAsyncStorage("tweets");

    const readItemFromStorage = async () => {
        const item = await getItem();
        if (item != null) {
            const retrievedTweets = JSON.parse(item);
            tweets.setCurrTweets(retrievedTweets);
        }
    };

    useEffect(() => {
        readItemFromStorage();
    }, []);

    return (
        <NativeBaseProvider>
            <TweeterContext.Provider value={tweets}>
                <NavigationContainer>
                    <NavStack />
                </NavigationContainer>
            </TweeterContext.Provider>
        </NativeBaseProvider>
    );
};

export default App;

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import FlipperAsyncStorage from "rn-flipper-async-storage-advanced";
import TweeterContext from "./context";
import { useTweets } from "./hooks/useTweets";
import { RootStackParamList } from "./routes";
import HomeScreen from "./screens/HomeScreen";
import TweetActivityScreen from "./screens/TweetActivityScreen";
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
        <TweeterContext.Provider value={tweets}>
            <FlipperAsyncStorage />
            <NavigationContainer>
                <NavStack />
            </NavigationContainer>
        </TweeterContext.Provider>
    );
};

export default App;

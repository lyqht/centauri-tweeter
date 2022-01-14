import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import Textbox from "../components/Textbox";
import { useNavigation } from "@react-navigation/native";
import TweeterContext from "../context";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const TweetScreen: React.FC = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = useState("");
    const { tweets, setCurrTweets } = useContext(TweeterContext);
    const { setItem } = useAsyncStorage("tweets");


    const saveTweet = async () => {
        const newTweetState = [ ...tweets, text ];
        await setItem(JSON.stringify(newTweetState));
        setCurrTweets(newTweetState);
        onChangeText("");
    };

    const textboxProps = { text, onChangeText };

    return (
        <SafeAreaView style={styles.container}>
            <Textbox {...textboxProps} />
            <Button title="Tweet this" onPress={() => {
                saveTweet();
                navigation.navigate("TweetDetail");
            }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
});

export default TweetScreen;

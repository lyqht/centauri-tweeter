import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import faker from "@faker-js/faker";
import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Textbox from "../components/Textbox";
import TweeterContext, { Tweet } from "../context";
import { RootStackParamList } from "../routes";

type TweetScreenProps = NativeStackScreenProps<RootStackParamList, "TweetActivity">;
const maxCharLimit = 280;

const TweetScreen: React.FC = () => {
    const navigation = useNavigation<TweetScreenProps["navigation"]>();
    const newTweetId = uuidv4();
    const [text, onChangeText] = useState("");
    const { tweets, setCurrTweets } = useContext(TweeterContext);
    const { setItem } = useAsyncStorage("tweets");

    const saveTweet = async () => {
        const newTweet: Tweet = {
            content: text,
            id: newTweetId,
        };
        const newTweetState = [...tweets, newTweet ];
        await setItem(JSON.stringify(newTweetState));
        setCurrTweets(newTweetState);
        onChangeText("");
    };

    const textboxProps = { text, onChangeText, maxCharLimit };

    return (
        <SafeAreaView style={styles.container}>
            <Textbox {...textboxProps} />
            <Button title="Generate Random Text" onPress={() => {
                let newText = faker.hacker.phrase();
                onChangeText(newText);
            }} />
            <Button title="Clear Text" onPress={() => {
                onChangeText("");
            }} />
            <Button title="Tweet this" onPress={() => {
                saveTweet();
                navigation.navigate("TweetActivity");
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

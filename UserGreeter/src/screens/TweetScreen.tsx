import faker from "@faker-js/faker";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Center, HStack } from "native-base";
import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
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
            <Center>
                <HStack space={3} w={80}>
                    <Button flex={2} marginY={2} colorScheme="secondary" onPress={() => {
                        let newText = faker.hacker.phrase();
                        onChangeText(newText);
                    }}>
                Generate Random Text
                    </Button>

                    <Button flex={1} marginY={2}
                        colorScheme="danger" variant={"outline"} isDisabled={text.length === 0}
                        onPress={() => {
                            onChangeText("");
                        }}>
                Clear Text
                    </Button>
                </HStack>
                <Button w={"80"} m={2} isDisabled={text.length === 0 || text.length > maxCharLimit} onPress={() => {
                    saveTweet();
                    navigation.navigate("TweetActivity");
                }}>
                Tweet this
                </Button>
            </Center>
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

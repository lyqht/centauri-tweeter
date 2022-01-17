import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import { RootStackParamList } from "../routes";
import Context from "../context";

type TweetDetailProps = {
    text: string;
}

const TweetDetail: React.FC<TweetDetailProps> = ({text}) => (
    <View style={styles.tweetContainer}>
        <Text>{text}</Text>
    </View>
);

type TweetActivityScreenProps = NativeStackScreenProps<RootStackParamList, "TweetDetail">;

const TweetActivityScreen: React.FC<TweetActivityScreenProps> = () => {
    const { tweets } = useContext(Context);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Number of tweets made: {tweets.length}</Text>
            {tweets.map((tweet, index) => <TweetDetail key={tweet.content + index} text={tweet.content} />)}
        </SafeAreaView>
    );
};

interface Styles {
    container: ViewStyle;
    tweetContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 24,
        margin: 16,
    },
    tweetContainer: {
        padding: 24,
        paddingTop: 24,
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 24,
        margin: 16,
    },
});

export default TweetActivityScreen;

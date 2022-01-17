import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import Context, { Tweet } from "../context";
import { RootStackParamList } from "../routes";

type TweetDetailProps = Pick<Tweet, "content">
const TweetDetail: React.FC<TweetDetailProps> = ({content}) => (
    <View style={styles.tweetContainer}>
        <Text>{content}</Text>
    </View>
);

type TweetActivityScreenProps = NativeStackScreenProps<RootStackParamList, "TweetDetail">;

const TweetActivityScreen: React.FC<TweetActivityScreenProps> = () => {
    const { tweets } = useContext(Context);

    const _renderListItem = ({ item }: {item: Tweet}) => (<TweetDetail key={item.id} content={item.content} />);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Number of tweets made: {tweets.length}</Text>
            <FlatList
                keyExtractor={item => item.id}
                data={tweets}
                renderItem={_renderListItem} />
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

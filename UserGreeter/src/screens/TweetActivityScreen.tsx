import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Text } from "native-base";
import React, { useContext } from "react";
import { LayoutAnimation, SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import TweetDetailRow from "../components/TweetDetailRow";
import TweeterContext, { Tweet } from "../context";
import { RootStackParamList } from "../routes";

type TweetActivityScreenProps = NativeStackScreenProps<RootStackParamList, "TweetDetail">;

const TweetActivityScreen: React.FC<TweetActivityScreenProps> = () => {
    const { tweets, setCurrTweets } = useContext(TweeterContext);

    const deleteItem = (id: string) => {
        const itemToDelete = tweets.findIndex(x => x.id === id);
        const updatedList = [...tweets];
        updatedList.splice(itemToDelete, 1);
        setCurrTweets(updatedList);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    };

    const _renderListItem = ({ item }: { item: Tweet }) => (
        <TweetDetailRow onSwipe={() => { deleteItem(item.id); }} key={item.id} content={item.content} />
    );

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
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 12,
        margin: 12,
    },
});

export default TweetActivityScreen;

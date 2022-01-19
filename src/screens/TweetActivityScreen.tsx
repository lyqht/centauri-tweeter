import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, FlatList, Text, useToast } from "native-base";
import { default as React, useContext, useEffect, useState } from "react";
import { LayoutAnimation, SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import TweetDetailRow from "../components/TweetDetailRow";
import TweeterContext, { Tweet } from "../context";
import { RootStackParamList } from "../routes";

type TweetActivityScreenProps = NativeStackScreenProps<RootStackParamList, "TweetDetail">;
type TempRemovedTweet = Tweet & { index: number };

const TweetActivityScreen: React.FC<TweetActivityScreenProps> = () => {
    const { tweets, setCurrTweets } = useContext(TweeterContext);
    const [tempRemovedTweet, setTempRemovedTweet] = useState<TempRemovedTweet | null>(null);
    const toast = useToast();

    useEffect(() => {
        if (tempRemovedTweet != null) {
            toast.show({
                render: () => {
                    return (
                        <Box p="4" rounded="sm" mb={5}>
                            <Text>
                                Deleting tweet...
                            </Text>
                            <Button colorScheme="warning" onPress={revertDelete}>
                                Cancel
                            </Button>
                        </Box>
                    );
                },
            });
        }
    }, [tempRemovedTweet]);

    const revertDelete = () => {
        if (tempRemovedTweet != null) {
            const updatedList = [...tweets];
            const { index, id, content } = tempRemovedTweet;
            const oldTweet = { id, content };
            updatedList.splice(index, 0, oldTweet);
            setCurrTweets(updatedList);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            toast.closeAll();
        }
    };

    const deleteItem = (id: string) => {
        const itemToDeleteIndex = tweets.findIndex(x => x.id === id);
        const itemToDelete = tweets[itemToDeleteIndex];
        const updatedList = [...tweets];
        updatedList.splice(itemToDeleteIndex, 1);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setCurrTweets(updatedList);
        setTempRemovedTweet({
            ...itemToDelete,
            index: itemToDeleteIndex,
        });
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

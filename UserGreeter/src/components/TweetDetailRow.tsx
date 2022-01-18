import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Tweet } from "../context";

type Props = Pick<Tweet, "content">
const TweetDetailRow: React.FC<Props> = ({ content }) => (
    <Swipeable
        renderLeftActions={LeftSwipeActions}
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={swipeFromRightOpen}
        onSwipeableLeftOpen={swipeFromLeftOpen}
    >
        <View style={styles.container}>
            <Text>{content}</Text>
        </View>
    </Swipeable>
);

const LeftSwipeActions = () => {
    return (
        <View
            style={styles.swipeActionLeft}
        >
            <Text
            >
                Bookmark
            </Text>
        </View>
    );
};
const rightSwipeActions = () => {
    return (
        <View
            style={styles.swipeActionRight}
        >
            <Text
            >
                Delete
            </Text>
        </View>
    );
};
const swipeFromLeftOpen = () => {

};
const swipeFromRightOpen = () => {

};

interface Styles {
    container: ViewStyle;
    swipeActionLeft: ViewStyle;
    swipeActionRight: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        padding: 24,
        paddingTop: 24,
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 24,
        margin: 16,
    },
    swipeActionLeft: {
        justifyContent: "center",
    },
    swipeActionRight: {
        justifyContent: "center",
        alignItems: "flex-end",
    },
});

export default TweetDetailRow;

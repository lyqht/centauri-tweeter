import React from "react";
import { Animated, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Tweet } from "../context";

type Props = Pick<Tweet, "content"> & {
    onSwipe: () => void
}
const TweetDetailRow: React.FC<Props> = ({ content, onSwipe }) => (
    <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={onSwipe}
    >
        <View style={styles.container}>
            <Text>{content}</Text>
        </View>
    </Swipeable>
);

const rightSwipeActions = (progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => {
    return (
        <View
            style={[styles.swipeActionRight, {
                transform: [{ translateX: -20 }],
            }]}
        >
            <Text
            >
                Delete
            </Text>
        </View>
    );
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

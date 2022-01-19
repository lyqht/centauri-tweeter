import { Box, Text } from "native-base";
import React from "react";
import { Animated, StyleSheet,  View, ViewStyle } from "react-native";
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
        <Box marginY={4} bg={"white"} style={styles.container}>
            <Text>{content}</Text>
        </Box>
    </Swipeable>
);

const rightSwipeActions = (progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => {
    return (
        <Box
            bg={"red.600"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            marginY={4}
            width={"full"}
            p={4}
        >
            <Text
                color={"white"}
            >
                Delete
            </Text>
        </Box>
    );
};

interface Styles {
    container: ViewStyle;
    actionRightContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        padding: 24,
        paddingTop: 24,
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
    },
    actionRightContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
    },
});

export default TweetDetailRow;

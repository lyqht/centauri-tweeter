import React from "react";
import { SafeAreaView, StyleSheet, Text, ViewStyle } from "react-native";

const TweetDetailScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>WIP</Text>
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
        justifyContent: "space-evenly",
        alignContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
});

export default TweetDetailScreen;

import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import NavButton from "../components/NavButton";

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavButton name={"Make a tweet"} navigationRoute={"Tweet"} />
            <NavButton name={"My Tweets"} navigationRoute={"TweetActivity"} />
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

export default HomeScreen;

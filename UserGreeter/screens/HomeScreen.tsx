import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import NavButton from "../components/NavButton";
import VectorImage from "react-native-vector-image";

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavButton name={"Make a tweet"} navigationRoute={"Tweet"} />
            <NavButton name={"My Tweets"} navigationRoute={"TweetActivity"} />
            <VectorImage source={require("./Real-Dev-Squad.svg")} />
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
        padding: 8,
    },
});

export default HomeScreen;

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Textbox from "../components/Textbox";

const HomePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Textbox />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
});

export default HomePage;

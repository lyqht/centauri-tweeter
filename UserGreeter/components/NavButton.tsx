import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ViewStyle, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../routes";

type NavButtonProps = {
    name: string;
    navigationRoute: keyof RootStackParamList;
}

const NavButton: React.FC<NavButtonProps> = ({ name, navigationRoute }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate(navigationRoute);
            }}
        >
            <Text>
                {name}
            </Text>
        </TouchableOpacity>
    );
};


interface Styles {
    button: ViewStyle;

}

const styles = StyleSheet.create<Styles>({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDDDDD",
        width: "80%",
        padding: 16,
        borderRadius: 8,
    },
});

export default NavButton;

import { useNavigation } from "@react-navigation/native";
import { Center, Pressable, useTheme } from "native-base";
import React from "react";
import { RootStackParamList } from "../routes";

type NavButtonProps = {
    name: string;
    navigationRoute: keyof RootStackParamList;
}

const NavButton: React.FC<NavButtonProps> = ({ name, navigationRoute }) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Pressable onPress={() => { navigation.navigate(navigationRoute);}}>
            {({ isPressed }) => {
                return (
                    <Center
                        bg={isPressed ? colors.darkBlue[900] : colors.darkBlue[700]}
                        shadow={isPressed ? "2" : "4"}
                        p="5"
                        m="2"
                        w={"80"}
                        rounded="8"
                    >

                        {name}
                    </Center>
                );
            }}</Pressable>
    );
};

export default NavButton;

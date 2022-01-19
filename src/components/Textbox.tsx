import { Text } from "native-base";
import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type TextboxProps = {
    text: string;
    maxCharLimit: number;
    onChangeText: ((text: string) => void)
}

const Textbox: React.FC<TextboxProps> = ({text, onChangeText, maxCharLimit}) => {
    const [borderColor, onChangeBorderColor] = React.useState(colors.border.default);
    const [backgroundColor, onChangeBgColor] = React.useState(colors.background.default);

    const getRemainingChars = () => maxCharLimit - text.length;

    React.useEffect(() => {
        if (getRemainingChars() < 10 && getRemainingChars() > 0) {
            onChangeBorderColor(colors.border.warning);
            onChangeBgColor(colors.background.warning);
        } else if (getRemainingChars() <= 0) {
            onChangeBorderColor(colors.border.error);
            onChangeBgColor(colors.background.error);
        } else {
            onChangeBorderColor(colors.border.default);
            onChangeBgColor(colors.background.default);
        }
    }, [text]);

    const textContainerStyle = StyleSheet.flatten([
        styles.textContainer,
        {
            borderColor,
            backgroundColor,
        },
    ]);

    return (
        <View style={styles.container}>
            <TextInput
                multiline={true}
                onChangeText={onChangeText}
                value={text}
                style={textContainerStyle}
                placeholder="type something here"
            />
            <Text style={{ color: borderColor }}>{getRemainingChars()} characters remaining</Text>
        </View>
    );
};

const colors = {
    border: {
        default: "rgba(0,0,0,0.6)",
        warning: "#c4b56d",
        error: "red",
    },
    background: {
        default: "rgba(0,0,0,0)",
        warning: "rgba(255, 221, 50, 0.1)",
        error: "rgba(255,0,0,0.1)",
    },
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        margin: 12,
        marginTop: 0,
        fontSize: 14,
        height: "50%",
    },
    textContainer: {
        padding: 24,
        paddingTop: 24,
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        height: "100%",
        width: "100%",
    },
});

export default Textbox;

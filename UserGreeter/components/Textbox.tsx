import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Textbox = () => {
  const maxLimit = 10;
  const [text, onChangeText] = React.useState('');
  const [color, onChangeColor] = React.useState('black');
  const [backgroundColor, onChangeBgColor] = React.useState('');

  const getRemainingChars = () => maxLimit - text.length;

  React.useEffect(() => {
    if (getRemainingChars() < 10 && getRemainingChars() > 0) {
      onChangeColor('#c4b56d');
      onChangeBgColor('rgba(255, 221, 50, 0.1)');
    } else if (getRemainingChars() <= 0) {
      onChangeColor('red');
      onChangeBgColor('rgba(255,0,0,0.1)');
    } else {
      onChangeColor('black');
      onChangeBgColor('rgba(0,0,0,0)');
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        onChangeText={onChangeText}
        value={text}
        style={{
          ...styles.textContainer,
          borderColor: color,
          backgroundColor: backgroundColor,
        }}
        placeholder="type something here"
      />
      <Text style={{ color }}>{getRemainingChars()} characters remaining</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    height: '50%',
  },
  textContainer: {
    padding: 24,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 24,
    height: '100%',
    width: '100%',
  },
});

export default Textbox;

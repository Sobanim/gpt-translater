import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button color={'red'} title={'Some text'} />

      <TextInput placeholder={'Put some text'}/>
      <TextInput multiline placeholder={'Put more texts'} style={styles.textInput} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  button: {
    textTransform: 'lowercase',
    backgroundColor: 'black'
  },
  textInput: {
    // width: "50%",
    borderBottomColor: 'white'
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Button (props: ButtonProps){
  return (
<TouchableOpacity>
<Text>
  {props.title}
</Text>
</TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
        <Button title = "Send 1"/>
        <Button title = "Send 2"/>
        <Button title = "Send 3"/>
        <Button title = "Hello World"/>
      <StatusBar style="auto"  />
    </View>
  );
}

interface ButtonProps{
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // title: {
  //   color: '#FFF',
  //   fontSize: 22,
  // }
});

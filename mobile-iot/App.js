import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./screens/Weather";
import Clock from "./screens/Clock";

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />
      <Weather />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#70AFD6",
    display: "flex",
    flexDirection: "column",
  },
});

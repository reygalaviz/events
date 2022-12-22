import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuthNavigation from "./app/navigation/AuthNavigation";
import NavigationContainer from "@react-navigation/native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuthNavigation from "./app/navigation/AuthNavigation";
import { PortalProvider } from "@gorhom/portal";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PortalProvider>
        <AuthNavigation />
      </PortalProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

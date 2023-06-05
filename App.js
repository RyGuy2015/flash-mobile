// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <StatusBar barStyle="light-content" />
      <WebView
        style={styles.container}
        source={{ uri: "https://mktbase.dpslink.com/" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "white",
    ...Platform.select({
      ios: {
        marginTop: Constants.statusBarHeight,
      },
    }),
  },
});

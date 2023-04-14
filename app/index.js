import { StyleSheet, View } from "react-native";
import Login from "./login/login";

export default function Page() {

  return (
    <View style={styles.container}>

      <Login />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 24,
  }
});

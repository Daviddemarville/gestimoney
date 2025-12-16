import { Text, StyleSheet } from "react-native";
import { Screen } from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>
        GestiMoney – Dashboard
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});

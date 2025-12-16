import { View, Text, StyleSheet } from "react-native";
import { ActionShortcut } from "@/components/ui/ActionShortcut";

export function ActionsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actions</Text>
      <ActionShortcut />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontWeight: "600",
    marginBottom: 8,
  },
});

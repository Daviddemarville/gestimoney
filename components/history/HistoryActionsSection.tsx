import { View, Text, StyleSheet } from "react-native";
import { ActionShortcut } from "@/components/ui/ActionShortcut";

export function HistoryActionsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actions</Text>
      <View style={styles.actions}>
        <ActionShortcut />        
      </View>
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
  actions: {
    flexDirection: "row",
    gap: 12,
  },
});


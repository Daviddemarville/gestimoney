import { View, Text, StyleSheet, Pressable } from "react-native";

export function DangerZoneSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zone dangereuse</Text>

      <Pressable style={styles.deleteButton}>
        <Text style={styles.deleteText}>Supprimer mon compte</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  title: {
    fontWeight: "600",
    marginBottom: 8,
    color: "#B91C1C",
  },
  deleteButton: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#EF4444",
    alignItems: "center",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});

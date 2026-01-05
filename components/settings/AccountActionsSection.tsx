import { View, Text, StyleSheet, Pressable } from "react-native";

export function AccountActionsSection() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  logoutButton: {
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  logoutText: {
    fontWeight: "600",
  },
});

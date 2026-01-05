import { View, Text, StyleSheet } from "react-native";

export function TransactionSubmitButton() {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>Ajouter la transaction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: "#666",
  },
});

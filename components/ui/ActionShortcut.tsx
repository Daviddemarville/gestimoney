import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export function ActionShortcut() {
  return (
    <View style={styles.container}>
      
      <Link href={{ pathname: "/modal", params: { type: "expense" } }}>
  <Pressable style={[styles.button, styles.expense]}>
    <Text style={styles.buttonText}>+ Ajouter une dépense</Text>
  </Pressable>
</Link>

<Link href={{ pathname: "/modal", params: { type: "income" } }}>
  <Pressable style={[styles.button, styles.income]}>
    <Text style={styles.buttonText}>+ Ajouter une recette</Text>
  </Pressable>
</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  expense: {
    backgroundColor: "#E53935",
  },
  income: {
    backgroundColor: "#43A047",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

import { View, Text, StyleSheet } from "react-native";

export function HistoryListSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique</Text>
      <Text>Liste des transactions à venir</Text>
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

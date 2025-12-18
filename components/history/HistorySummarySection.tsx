import { View, Text, StyleSheet } from "react-native";

export function HistorySummarySection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résumé</Text>
      <Text>Résumé des transactions à venir</Text>
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

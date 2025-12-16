import { View, Text, StyleSheet } from "react-native";

export function OverviewSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vue d’ensemble</Text>
      <Text>Contenu à venir</Text>
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

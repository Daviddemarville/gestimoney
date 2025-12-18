import { View, Text, StyleSheet } from "react-native";

export function PreferencesSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préférences</Text>
      <Text>Préférences utilisateur à venir</Text>
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

import { View, Text, StyleSheet } from "react-native";

export function AccountSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compte</Text>
      <Text>Informations du compte à venir</Text>
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

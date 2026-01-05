import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import data from "@/data/dashboard-chart.json";

export function AccountSection() {
  const { account } = data.settings;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compte</Text>

      <View style={styles.row}>
        <Text>Email : {account.email}</Text>
        <MaterialIcons name="edit" size={16} color="#666" />
      </View>

      <View style={styles.row}>
  <Text>Mot de passe</Text>

  {account.provider === "email" ? (
    <MaterialIcons name="edit" size={16} color="#666" />
  ) : (
    <Text style={styles.disabled}>Géré par Google</Text>
  )}
</View>

      <View style={styles.row}>
        <Text>Plan : {account.plan}</Text>
      </View>

      <Text style={styles.meta}>
        Compte créé le {account.createdAt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontWeight: "600",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  meta: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },
  disabled: {
    fontSize: 12,
    color: "#999",
  },
});

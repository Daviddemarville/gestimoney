import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import data from "@/data/dashboard-chart.json";

export function PreferencesSection() {
  const { preferences } = data.settings;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préférences</Text>

      <View style={styles.row}>
        <Text>Devise : {preferences.currency}</Text>
        <MaterialIcons name="edit" size={16} color="#666" />
      </View>

      <View style={styles.row}>
        <Text>Thème : {preferences.theme}</Text>
        <MaterialIcons name="edit" size={16} color="#666" />
      </View>

      <View style={styles.row}>
        <Text>
          Notifications : {preferences.notifications ? "Activées" : "Désactivées"}
        </Text>
        <MaterialIcons name="edit" size={16} color="#666" />
      </View>
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
});

import { View, Text, StyleSheet } from "react-native";
import dashboardData from "@/data/dashboard-chart.json";

export function OverviewSection() {
  const { overview } = dashboardData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{overview.title}</Text>

      <View style={styles.block}>
        <Text style={styles.label}>Solde total</Text>
        <Text style={styles.value}>
          {overview.totalBalance.toLocaleString("fr-FR")} €
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Ce mois-ci</Text>
        <Text style={styles.positive}>+{overview.monthly.income} €</Text>
        <Text style={styles.negative}>-{overview.monthly.expense} €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontWeight: "600",
    marginBottom: 12,
  },
  block: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 24,
    fontWeight: "700",
  },
  positive: {
    color: "green",
    fontWeight: "600",
  },
  negative: {
    color: "red",
    fontWeight: "600",
  },
});

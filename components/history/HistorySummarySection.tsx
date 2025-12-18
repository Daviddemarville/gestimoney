import { View, Text, StyleSheet } from "react-native";
import data from "@/data/dashboard-chart.json";

export function HistorySummarySection() {
  const { summary } = data.history;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{summary.title}</Text>

      <Text style={styles.line}>
        {summary.count} transactions
      </Text>

      <Text style={styles.positive}>+ {summary.income} €</Text>
      <Text style={styles.negative}>- {summary.expense} €</Text>
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
  line: {
    marginBottom: 4,
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

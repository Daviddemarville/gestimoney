import { View, Text, StyleSheet } from "react-native";
import data from "@/data/dashboard-chart.json";

export function HistoryListSection() {
  const items = data.history.items;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique</Text>

      {items.map((item) => (
        <View key={item.id} style={styles.row}>
          <View>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.meta}>
              {item.category} • {item.date}
            </Text>
          </View>

          <Text
            style={[
              styles.amount,
              item.amount > 0 ? styles.positive : styles.negative,
            ]}
          >
            {item.amount > 0 ? "+" : ""}
            {item.amount} €
          </Text>
        </View>
      ))}
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  label: {
    fontWeight: "500",
  },
  meta: {
    fontSize: 12,
    color: "#666",
  },
  amount: {
    fontWeight: "600",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

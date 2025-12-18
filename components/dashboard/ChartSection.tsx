import { View, Text, StyleSheet } from "react-native";
import { DashboardPieChart } from "./DashboardPieChart";
import dashboardData from "@/data/dashboard-chart.json";
import { ChartLegend } from "./ChartLegend";

export function ChartSection() {
  const { chart } = dashboardData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chart.title}</Text>
      <DashboardPieChart items={chart.items} />
      <ChartLegend items={chart.items} />
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

import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

type LegendItem = {
  label: string;
  color: string;
};

interface ChartLegendProps {
  items: LegendItem[];
}

export function ChartLegend({ items }: ChartLegendProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen((v) => !v)}>
        <Text style={styles.toggle}>
          Légende {open ? "▲" : "▼"}
        </Text>
      </Pressable>

      {open && (
        <View style={styles.list}>
          {items.map((item, index) => (
            <View key={index} style={styles.row}>
              <View style={[styles.dot, { backgroundColor: item.color }]} />
              <Text>{item.label}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  toggle: {
    fontWeight: "600",
  },
  list: {
    marginTop: 8,
    gap: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

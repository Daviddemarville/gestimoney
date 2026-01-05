import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  value: "expense" | "income";
  onChange: (value: "expense" | "income") => void;
}

export function TransactionTypeSelector({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type de transaction</Text>

      <View style={styles.row}>
        <Pressable
          style={[
            styles.option,
            value === "expense" && styles.activeExpense,
          ]}
          onPress={() => onChange("expense")}
        >
          <Text style={styles.optionText}>Dépense</Text>
        </Pressable>

        <Pressable
          style={[
            styles.option,
            value === "income" && styles.activeIncome,
          ]}
          onPress={() => onChange("income")}
        >
          <Text style={styles.optionText}>Recette</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    fontWeight: "600",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  option: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  activeExpense: {
    backgroundColor: "#FEE2E2",
    borderColor: "#EF4444",
  },
  optionText: {
    fontWeight: "600",
  },
  activeIncome: {
  backgroundColor: "#DCFCE7",
  borderColor: "#22C55E",
  },
});

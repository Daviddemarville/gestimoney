import { View, Text, StyleSheet, TextInput } from "react-native";

interface TransactionAmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function TransactionAmountInput({
  value,
  onChange,
}: TransactionAmountInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Montant</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder="0,00 €"
        keyboardType="numeric"
        inputMode="decimal"
      />
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
  input: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
  },
});

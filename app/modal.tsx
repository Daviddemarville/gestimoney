import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { Link } from "expo-router";
import { TransactionTypeSelector } from "@/components/addtransaction/TransactionTypeSelector";
import { TransactionAmountInput } from "@/components/addtransaction/TransactionAmountInput";
import { TransactionCategorySelector } from "@/components/addtransaction/TransactionCategorySelector";
import { TransactionSubmitButton } from "@/components/addtransaction/TransactionSubmitButton";

export default function ModalScreen() {

const { type } = useLocalSearchParams<{ type?: "expense" | "income" }>();

const [transactionType, setTransactionType] = useState<
  "expense" | "income"
>(type === "income" ? "income" : "expense");

const [amount, setAmount] = useState("");
const [category, setCategory] = useState<string | null>(null);
  return (

    <View style={styles.container}>
      <Text style={styles.title}>
        Ajouter une transaction
      </Text>
    <TransactionTypeSelector value={transactionType} onChange={setTransactionType}/>
    <TransactionAmountInput value={amount} onChange={setAmount}/>
    <TransactionCategorySelector value={category} onChange={setCategory}/>
    <TransactionSubmitButton />     
   
      <Link href="/" dismissTo>
        <Text style={styles.close}>Fermer</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 24,
    textAlign: "center",
  },
  section: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  submit: {
    marginTop: 32,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
  submitText: {
    fontWeight: "600",
    color: "#666",
  },
  close: {
    marginTop: 16,
    textAlign: "center",
  },
});

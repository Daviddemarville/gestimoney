import { View, Text, StyleSheet, Pressable } from "react-native";

const categories = ["Logement", "Alimentation", "Transport", "Loisirs", "Salaire", "Rente"];

interface TransactionCategorySelectorProps {
  value: string | null;
  onChange: (category: string) => void;
}

export function TransactionCategorySelector({
  value,
  onChange,
}: TransactionCategorySelectorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Catégorie</Text>

      <View style={styles.list}>
        {categories.map((cat) => {
          const isActive = value === cat;

          return (
            <Pressable
              key={cat}
              onPress={() => onChange(cat)}
              style={[
                styles.item,
                isActive && styles.itemActive,
              ]}
            >
              <Text
                style={[
                  styles.itemText,
                  isActive && styles.itemTextActive,
                ]}
              >
                {cat}
              </Text>
            </Pressable>
          );
        })}
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
  list: {
    gap: 8,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  itemActive: {
    backgroundColor: "#EEF2FF",
    borderColor: "#4F46E5",
  },
  itemText: {
    fontSize: 16,
  },
  itemTextActive: {
    fontWeight: "600",
    color: "#4F46E5",
  },
});

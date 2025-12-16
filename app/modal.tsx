import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        GestiMoney – Ajout de transaction
      </Text>

      <Link href="/" dismissTo>
        <Text style={styles.link}>
          Fermer
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
  },
});

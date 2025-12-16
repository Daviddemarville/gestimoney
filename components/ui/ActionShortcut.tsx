import { View, Text, StyleSheet } from "react-native";

export function ActionShortcut() {
  return (
    <View style={styles.container}>
      <Text>Action</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});

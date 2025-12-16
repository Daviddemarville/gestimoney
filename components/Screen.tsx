import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

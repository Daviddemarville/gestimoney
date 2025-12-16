import { Text, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface ScreenTitleProps {
  children: ReactNode;
}

export function ScreenTitle({ children }: ScreenTitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});

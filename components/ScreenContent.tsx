import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface ScreenContentProps {
  children: ReactNode;
}

export function ScreenContent({ children }: ScreenContentProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  
});

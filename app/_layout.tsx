import "react-native-reanimated";
import "react-native-url-polyfill/auto";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal" }}
        />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}

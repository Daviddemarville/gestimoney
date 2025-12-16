import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "Historique",
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Paramètres",
        }}
      />
    </Tabs>
  );
}

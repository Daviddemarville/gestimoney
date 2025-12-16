import { Text } from "react-native";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Dashboard</ScreenTitle>
      <ScreenContent>
        <Text>Contenu du dashboard ici.</Text>
      </ScreenContent>
    </Screen>
  );
}

import { Text } from "react-native";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Historique</ScreenTitle>
      <ScreenContent>
        <Text>Contenu du historique ici.</Text>
      </ScreenContent>
    </Screen>
  );
}

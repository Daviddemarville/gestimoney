import { Text } from "react-native";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Paramètres</ScreenTitle>
      <ScreenContent>
        <Text>Contenu des paramètres ici.</Text>
      </ScreenContent>
    </Screen>
  );
}

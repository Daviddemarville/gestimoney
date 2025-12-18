import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";
import { AccountSection } from "@/components/settings/AccountSection";
import { PreferencesSection } from "@/components/settings/PreferencesSection";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Paramètres</ScreenTitle>
      <ScreenContent>
        <AccountSection />
        <PreferencesSection />
      </ScreenContent>
    </Screen>
  );
}

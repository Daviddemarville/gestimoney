import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";
import { AccountSection } from "@/components/settings/AccountSection";
import { PreferencesSection } from "@/components/settings/PreferencesSection";
import { AccountActionsSection } from "@/components/settings/AccountActionsSection";
import { DangerZoneSection } from "@/components/settings/DangerZoneSection";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Paramètres</ScreenTitle>
      <ScreenContent>
        <AccountSection />
        <AccountActionsSection />
        <PreferencesSection />
        <DangerZoneSection />
      </ScreenContent>
    </Screen>
  );
}

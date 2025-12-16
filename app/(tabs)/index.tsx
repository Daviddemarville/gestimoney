import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";
import { OverviewSection } from "@/components/dashboard/OverviewSection";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Dashboard</ScreenTitle>
      <ScreenContent>
        <OverviewSection />
        <ChartSection />
        <ActionsSection />
      </ScreenContent>
    </Screen>
  );
}

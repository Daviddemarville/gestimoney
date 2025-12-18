import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { ScreenContent } from "@/components/ScreenContent";
import { HistorySummarySection } from "@/components/history/HistorySummarySection";
import { HistoryListSection } from "@/components/history/HistoryListSection";
import { HistoryActionsSection } from "@/components/history/HistoryActionsSection";

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenTitle>GestiMoney – Historique</ScreenTitle>
      <ScreenContent>
        <HistorySummarySection />
        <HistoryActionsSection />
        <HistoryListSection />
      </ScreenContent>
    </Screen>
  );
}

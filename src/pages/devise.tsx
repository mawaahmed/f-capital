import DashboardWrapper from "@/components/layouts/distributor-dashboard-wraper";
import TodayRatesCards from "@/components/today-rates-cards";
import RateHistoryChart from "@/components/rate-history-chart";

export default function Devise() {
  return (
    <DashboardWrapper
      title="Currency Exchange"
      description="Monitor exchange rates and currency trends"
    >
      <div className="space-y-8">
        <TodayRatesCards />
        <RateHistoryChart />
      </div>
    </DashboardWrapper>
  );
}
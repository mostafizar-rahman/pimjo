import CustomersDemographic from "@/component/dashboardSection/customersDemographic";
import { MetricCardContainer } from "@/component/dashboardSection/metricCardContainer";
import MonthlySalesCard from "@/component/dashboardSection/monthlySalesCard";
import MonthlyStatistics from "@/component/dashboardSection/monthlyStatistics";
import MonthlyTargetCard from "@/component/dashboardSection/monthlyTargetCard";
import RecentOrders from "@/component/dashboardSection/recentOrders";
import { Suspense } from "react";

const Dashboard = async () => {
  return (
    <div>
      <div className="grid lg:grid-cols-[628fr_449fr] lg:gap-6 gap-4">
        <div className="lg:space-y-6 space-y-4 min-w-0">
          <MetricCardContainer />
          <MonthlySalesCard />
        </div>
        <MonthlyTargetCard />
      </div>
      <MonthlyStatistics />
      <div className="lg:mt-6 mt-4 lg:gap-6 gap-4 grid lg:grid-cols-[413fr_665fr]">
        <CustomersDemographic />
        <Suspense fallback={<h5>Loading...</h5>}>
          <RecentOrders />
        </Suspense>
      </div>
    </div>
  );
};
export default Dashboard;

import CustomersDemographic from "@/component/dashboardSection/customersDemographic";
import { MetricCard } from "@/component/dashboardSection/metricCard";
import MonthlySalesCard from "@/component/dashboardSection/monthlySalesCard";
import MonthlyStatistics from "@/component/dashboardSection/monthlyStatistics";
import MonthlyTargetCard from "@/component/dashboardSection/monthlyTargetCard";
import RecentOrders from "@/component/dashboardSection/recentOrders";
import { PiCube, PiUserDash, PiUsers } from "@/lib/icons";

async function getStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stats`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch stats')
  }
  return res.json();
}

async function getOrders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch orders')
  }
  return res.json();
}

const Dashboard = async () => {
  const stats = await getStats();
  const orders = await getOrders();

  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-[628fr_448fr] lg:gap-[25px] gap-4">
          <div className="lg:space-y-6 space-y-4">
            <div className="grid sm:grid-cols-2 lg:gap-6 gap-4">
              <MetricCard
                icon={<PiUsers />}
                title={"Customers"}
                value={stats.customers}
                change="11.0%"
                changeType="positive"
              />
              <MetricCard
                icon={<PiCube />}
                title={"Orders"}
                value={stats.totalOrders}
                change="9.05%"
                changeType="nagitive"
              />
            </div>
            <MonthlySalesCard />
          </div>
          <MonthlyTargetCard />
        </div>
        <MonthlyStatistics />
        <div className="lg:mt-6 mt-4 lg:gap-6 gap-4 grid lg:grid-cols-[413fr_665fr]">
          <CustomersDemographic />
          <RecentOrders orders={orders} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

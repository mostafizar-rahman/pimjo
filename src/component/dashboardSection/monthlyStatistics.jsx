"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DateRange from "../ui/dateRange";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const overviewData = [
  { name: "Jan", line1: 700, line2: 450 },
  { name: "Feb", line1: 720, line2: 460 },
  { name: "Mar", line1: 740, line2: 470 },
  { name: "Apr", line1: 720, line2: 480 },
  { name: "May", line1: 750, line2: 490 },
  { name: "Jun", line1: 780, line2: 550 },
  { name: "Jul", line1: 740, line2: 500 },
  { name: "Aug", line1: 820, line2: 580 },
  { name: "Sep", line1: 840, line2: 580 },
  { name: "Oct", line1: 810, line2: 580 },
  { name: "Nov", line1: 850, line2: 620 },
  { name: "Dec", line1: 880, line2: 640 },
];

const salesData = [
  { name: "Jan", line1: 400, line2: 300 },
  { name: "Feb", line1: 450, line2: 320 },
  { name: "Mar", line1: 500, line2: 340 },
  { name: "Apr", line1: 480, line2: 360 },
  { name: "May", line1: 520, line2: 380 },
  { name: "Jun", line1: 580, line2: 420 },
  { name: "Jul", line1: 600, line2: 440 },
  { name: "Aug", line1: 650, line2: 480 },
  { name: "Sep", line1: 680, line2: 500 },
  { name: "Oct", line1: 720, line2: 520 },
  { name: "Nov", line1: 750, line2: 540 },
  { name: "Dec", line1: 800, line2: 580 },
];

const revenueData = [
  { name: "Jan", line1: 900, line2: 600 },
  { name: "Feb", line1: 920, line2: 620 },
  { name: "Mar", line1: 850, line2: 580 },
  { name: "Apr", line1: 880, line2: 600 },
  { name: "May", line1: 950, line2: 650 },
  { name: "Jun", line1: 980, line2: 680 },
  { name: "Jul", line1: 920, line2: 640 },
  { name: "Aug", line1: 1000, line2: 700 },
  { name: "Sep", line1: 1050, line2: 720 },
  { name: "Oct", line1: 1020, line2: 710 },
  { name: "Nov", line1: 1100, line2: 750 },
  { name: "Dec", line1: 1150, line2: 800 },
];

const AreaChartComponent = ({ data, maxDomain = 1000 }) => (
  <div className="w-full h-[276px] mt-6">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ left: -20, right: -10, top: 10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="40%" stopColor="#3758F9" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#3758F9" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CB9FF" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#9CB9FF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
          dy={8}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
          domain={[0, maxDomain]}
          tickCount={6}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1F2937",
            border: "none",
            borderRadius: "8px",
            color: "#FFFFFF",
            fontSize: "12px",
          }}
          labelStyle={{ color: "#FFFFFF" }}
          cursor={false}
        />
        <CartesianGrid
          strokeDasharray="1 1"
          horizontal={true}
          vertical={false}
          stroke="#E5E7EB"
        />

        <Area
          type="monotone"
          dataKey="line1"
          stroke="#3758F9"
          strokeWidth={2}
          fill="url(#gradient1)"
          fillOpacity={0.1}
        />
        <Area
          type="monotone"
          dataKey="line2"
          stroke="#9CB9FF"
          strokeWidth={2}
          fill="url(#gradient2)"
          fillOpacity={0.1}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const MonthlyStatistics = () => {
  return (
    <div className="bg-primary md:p-6 p-5 rounded-2xl outline outline-border-dash lg:mt-6 mt-4">
      <div className="relative">
        <div>
          <Tabs defaultValue="overview">
            <div className="flex items-center justify-between flex-wrap gap-5">
              <div>
                <h5 className="text-lg font-semibold leading-[1.55555555556]">
                  Statistics
                </h5>
                <p className="mt-1 text-gray-100-dash text-sm leading-[1.42857]">
                  Overall performance metrics for each month
                </p>
              </div>
              <div className="flex items-center justify-between gap-[14px]">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="sales">Sales</TabsTrigger>
                  <TabsTrigger value="revenue">Revenue</TabsTrigger>
                </TabsList>
                <DateRange />
              </div>
            </div>

            <TabsContent value="overview">
              <AreaChartComponent data={overviewData} maxDomain={1000} />
            </TabsContent>

            <TabsContent value="sales">
              <AreaChartComponent data={salesData} maxDomain={800} />
            </TabsContent>

            <TabsContent value="revenue">
              <AreaChartComponent data={revenueData} maxDomain={1200} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MonthlyStatistics;

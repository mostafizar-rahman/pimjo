"use client";
import { PiThreeDot } from "@/lib/icons";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", sales: 500 },
  { name: "Feb", sales: 750 },
  { name: "Mar", sales: 400 },
  { name: "Apr", sales: 650 },
  { name: "May", sales: 300 },
  { name: "Jun", sales: 650 },
  { name: "Jul", sales: 500 },
  { name: "Aug", sales: 650 },
  { name: "Sep", sales: 550 },
  { name: "Oct", sales: 600 },
  { name: "Nov", sales: 520 },
  { name: "Dec", sales: 580 },
];

const MonthlySalesCard = () => {
  return (
    <div className="bg-card-background-dash md:p-6 p-5 rounded-2xl outline outline-border-dash min-w-0">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold leading-xl">Monthly Sales</h5>
        <span className="text-text-secondary-dash cursor-pointer w-6 h-6 flex justify-center items-center">
          <PiThreeDot />
        </span>
      </div>
      <div className="mt-6 w-full h-[188px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={data}
            margin={{ left: -20, right: 0, top: 14, bottom: -3 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: `var(--text-color-dash)` }}
              dy={5}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: `var(--text-color-dash)` }}
              domain={[0, 800]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#E5E7EB",
                border: "none",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#101828" }}
              itemStyle={{ color: "#101828" }}
              cursor={false}
            />
            <CartesianGrid
              strokeDasharray="0.5 0"
              stroke={`var(--border-secondary-dash)`}
              horizontal={true}
              vertical={false}
            />
            <Bar
              dataKey="sales"
              radius={[8, 8, 0, 0]}
              barSize={20}
              fill={`var(--border-secondary-dash)`}
              activeBar={{ fill: "#3B82F6" }}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlySalesCard;

import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import FilterByInsurance from "./filtre-by-assurance";

type StatCardProps = {
  title: string;
  value: string | number;
  change?: string; // ex: "40%" ou "-20%"
  description?: string;
};

type InsuranceStats = {
  insurance: string;
  revenue: string;
  orders: number;
  topPart: string;
  change: string;
};

// ✅ Composant StatCard
const StatCard: React.FC<StatCardProps> = ({ title, value, change, description }) => {
  const isPositive = change ? !change.startsWith("-") : true;

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-5 mt-5 flex flex-col gap-2">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h2 className="text-2xl font-bold text-blue-800">{value}</h2>
      {change && description && (
        <p className="text-xs text-gray-500 flex items-center gap-1">
          {isPositive ? (
            <ArrowUp className="w-4 h-4 text-blue-600" />
          ) : (
            <ArrowDown className="w-4 h-4 text-red-600" />
          )}
          <span
            className={`font-semibold ${
              isPositive ? "text-blue-600" : "text-red-600"
            }`}
          >
            {change}
          </span>
          {description}
        </p>
      )}
    </div>
  );
};

// ✅ Composant principal DashboardStats
const DashboardStats: React.FC = () => {
  const insurances = [
    "AXA Insurance",
    "Alpha Insurance Ltd",
    "Secu Insurance",
    "Life Insurance",
  ];

  const stats: InsuranceStats[] = [
    {
      insurance: "AXA Insurance",
      revenue: "4,500,000 XAF",
      orders: 757,
      topPart: "Front Bumper",
      change: "40%",
    },
    {
      insurance: "Alpha Insurance Ltd",
      revenue: "3,200,000 XAF",
      orders: 620,
      topPart: "Windshield",
      change: "-12%",
    },
    {
      insurance: "Secu Insurance",
      revenue: "2,850,000 XAF",
      orders: 540,
      topPart: "Headlight",
      change: "8%",
    },
    {
      insurance: "Life Insurance",
      revenue: "5,100,000 XAF",
      orders: 890,
      topPart: "Rear Bumper",
      change: "22%",
    },
  ];

  const [selectedInsurance, setSelectedInsurance] = useState("all");

  const filteredStats =
    selectedInsurance === "all"
      ? stats
      : stats.filter((s) => s.insurance === selectedInsurance);

  return (
    <div className="flex flex-col gap-6">
      {/* Filtre par assurance */}
      <FilterByInsurance
        insurances={insurances}
        onChange={setSelectedInsurance}
      />

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredStats.map((s) => (
          <React.Fragment key={s.insurance}>
            <StatCard
              title={`${s.insurance} - Total Revenue`}
              value={s.revenue}
              change={s.change}
              description="vs last month"
            />
            <StatCard
              title={`${s.insurance} - Total Orders`}
              value={s.orders}
              change={s.change}
              description="vs last month"
            />
            <StatCard
              title={`${s.insurance} - Top Replaced Part`}
              value={s.topPart}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;

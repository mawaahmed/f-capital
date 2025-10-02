"use client";

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function DashboardStats() {
  const data = [
    { name: "Processing", value: 20, color: "#10B981" }, // vert
    { name: "Executed", value: 55, color: "#3B82F6" },   // bleu
    { name: "Rejected", value: 25, color: "#EF4444" },   // rouge
  ];

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {/* Total Balance */}
      <Card className="border border-gray-200 w-full">
        <CardHeader>
          <CardDescription className="text-purple-500">Total Balance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">4,299,012 XAF</h2>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <ArrowUpRight size={16} />
            <span className="font-medium">6,2%</span>
            <span className="text-muted-foreground">vs last week</span>
          </p>
        </CardContent>
      </Card>

      {/* Today's Exchange */}
      <Card className="border border-gray-200 w-full">
        <CardHeader>
          <CardDescription className="text-purple-500">Today's exchange</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-semibold">1 USD = 650 FCFA</h2>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <ArrowUpRight size={16} />
            <span className="font-medium">8%</span>
            <span className="text-muted-foreground">vs last week</span>
          </p>
        </CardContent>
      </Card>

      {/* Transaction Status */}
      <Card className="border border-gray-200 w-full">
        <CardHeader className="flex-row items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-muted-foreground">Transaction Status</CardTitle>
          </div>
          <CardAction>
            <button className="text-muted-foreground text-xs hover:text-foreground">View all</button>
          </CardAction>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="relative h-24 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={28}   // réduit le rayon intérieur
                  outerRadius={38}   // réduit le rayon extérieur
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-semibold">55 %</span>
            </div>
          </div>
          <div className="ml-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm font-semibold text-green-600">20 %</div>
              <div className="text-[11px] text-muted-foreground">Processing</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-600">55 %</div>
              <div className="text-[11px] text-muted-foreground">Executed</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-red-500">25 %</div>
              <div className="text-[11px] text-muted-foreground">Rejected</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

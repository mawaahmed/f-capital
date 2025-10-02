"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Deposit = {
  id: string;
  amountXaf: number;
  date: string;
  status: "Confirmed" | "Pending" | "Failed";
};

const deposits: Deposit[] = [
  { id: "1", amountXaf: 500000, date: "12 Sept 2025", status: "Confirmed" },
  { id: "2", amountXaf: 1500000, date: "03 Sept 2025", status: "Pending" },
  { id: "3", amountXaf: 800000, date: "25 Aug 2025", status: "Failed" },
  { id: "4", amountXaf: 950000, date: "17 Aug 2025", status: "Confirmed" },
  { id: "5", amountXaf: 500000, date: "12 Sept 2025", status: "Failed" },
];

const monthsData = [
  { name: "Jan", USD: 90, EUR: 70 },
  { name: "Feb", USD: 80, EUR: 78 },
  { name: "Mar", USD: 85, EUR: 76 },
  { name: "Apr", USD: 95, EUR: 82 },
  { name: "May", USD: 100, EUR: 84 },
  { name: "Jun", USD: 98, EUR: 88 },
  { name: "Jul", USD: 102, EUR: 90 },
  { name: "Aug", USD: 104, EUR: 94 },
  { name: "Sep", USD: 101, EUR: 99 },
  { name: "Oct", USD: 99, EUR: 92 },
  { name: "Nov", USD: 97, EUR: 86 },
  { name: "Dec", USD: 105, EUR: 95 },
];

function formatXaf(value: number) {
  return new Intl.NumberFormat("en-US").format(value) + " XAF";
}

export default function ExchangeTrendsCard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 w-full">
      {/* Left: Exchange Rate Trends */}
      <Card className="lg:col-span-2 border border-gray-200 w-full">
        <CardHeader className="flex-row items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold">Exchange Rate Trends</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {/* Controls */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-muted-foreground/40">
                  <Check className="h-3 w-3 text-purple-600" />
                </span>
                <span className="text-foreground">USD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-muted-foreground/40">
                  <Check className="h-3 w-3 text-purple-600" />
                </span>
                <span className="text-foreground">EUR</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="text-muted-foreground">Select Period:</div>
              <div className="relative">
                <select className="appearance-none rounded-md border bg-background px-8 py-1.5 text-sm shadow-sm">
                  <option>Last year</option>
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">▾</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthsData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" tickMargin={8} />
                <YAxis hide />
                <Tooltip
                  formatter={(value: number, name: string) => [value + " k", name]}
                  contentStyle={{ borderRadius: 12, borderColor: "#e5e7eb" }}
                />
                <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: 8 }} />
                <Line type="monotone" dataKey="USD" stroke="#3B82F6" strokeWidth={3} dot={false} name="USD" />
                <Line type="monotone" dataKey="EUR" stroke="#22C55E" strokeWidth={3} dot={false} name="EUR" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Right: Recent deposit */}
      <Card className="border border-gray-200 w-full">
        <CardHeader className="flex-row items-start justify-between">
          <CardTitle className="text-base font-semibold">Recent deposit</CardTitle>
          <CardAction>
            <button className="text-muted-foreground text-xs hover:text-foreground">View all</button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <ul className="space-y-5">
            {deposits.map((d) => (
              <li key={d.id} className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold">{formatXaf(d.amountXaf)}</div>
                  <div className="text-[11px] text-muted-foreground">{d.date}</div>
                </div>
                <div
                  className={cn(
                    "text-sm font-medium",
                    d.status === "Confirmed" && "text-green-600",
                    d.status === "Pending" && "text-orange-500",
                    d.status === "Failed" && "text-red-500"
                  )}
                >
                  {d.status}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}



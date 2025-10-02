"use client";

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

const rateHistoryData = [
  { day: "Monday", USD: 550, EUR: 700 },
  { day: "Tuesday", USD: 580, EUR: 720 },
  { day: "Wednesday", USD: 600, EUR: 700 },
  { day: "Thursday", USD: 620, EUR: 750 },
  { day: "Friday", USD: 580, EUR: 730 },
  { day: "Saturday", USD: 590, EUR: 740 },
  { day: "Sunday", USD: 610, EUR: 760 },
];

export default function RateHistoryChart() {
  return (
    <div className="space-y-6 bg-white rounded-xl p-4">
      <h2 className="text-2xl font-bold">Rate History</h2>
      
      <div className="bg-white rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          {/* Legend */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm font-medium">USD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium">EUR</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Currency Selection */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Select Currency:</span>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-muted-foreground/40">
                  <Check className="h-3 w-3 text-purple-600" />
                </span>
                <span className="text-sm">USD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-muted-foreground/40">
                  <Check className="h-3 w-3 text-purple-600" />
                </span>
                <span className="text-sm">EUR</span>
              </div>
            </div>

            {/* Period Selection */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Select Period:</span>
              <div className="relative">
                <select className="appearance-none rounded-md border bg-background px-6 py-1.5 text-sm shadow-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                  <option>Last year</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">▾</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rateHistoryData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="day" 
                tickMargin={8}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[500, 800]}
                tickCount={4}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${value} FCFA`, 
                  name === 'USD' ? 'USD' : 'EUR'
                ]}
                labelFormatter={(label) => `Date: ${label}`}
                contentStyle={{ 
                  borderRadius: 12, 
                  borderColor: "#e5e7eb",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="USD" 
                stroke="#22C55E" 
                strokeWidth={3} 
                dot={false}
                name="USD"
              />
              <Line 
                type="monotone" 
                dataKey="EUR" 
                stroke="#3B82F6" 
                strokeWidth={3} 
                dot={false}
                name="EUR"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

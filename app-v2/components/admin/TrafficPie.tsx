"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#4caf50", "#ffdd44", "#5b9bff", "#b5b5b5"];

export default function TrafficPie({ data }: { data: { name: string; value: number }[] }) {
  if (data.length === 0) {
    return (
      <div className="flex h-[240px] items-center justify-center text-sm text-[var(--color-ink-faint)]">
        No traffic yet.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={3}>
          {data.map((entry, i) => (
            <Cell key={entry.name} fill={COLORS[i % COLORS.length]} stroke="none" />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "rgba(20,20,20,0.9)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 12,
            fontSize: 13,
          }}
          labelStyle={{ color: "#f5f5f5" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

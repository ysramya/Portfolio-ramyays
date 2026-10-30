"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export type DayPoint = { day: string; label: string; views: number; visitors: number };

const VIEWS = "#12271f";
const VISITORS = "#a47e61";

export default function VisitsChart({ data }: { data: DayPoint[] }) {
  if (data.every((d) => d.views === 0)) {
    return (
      <div className="flex h-[280px] items-center justify-center text-sm text-[var(--color-ink-faint)]">
        No visits in this period.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={VIEWS} stopOpacity={0.22} />
            <stop offset="100%" stopColor={VIEWS} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={VISITORS} stopOpacity={0.28} />
            <stop offset="100%" stopColor={VISITORS} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(18,39,31,0.08)" vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          minTickGap={28}
          tick={{ fontSize: 12, fill: "#6b7d73" }}
        />
        <YAxis
          allowDecimals={false}
          tickLine={false}
          axisLine={false}
          width={44}
          tick={{ fontSize: 12, fill: "#6b7d73" }}
        />
        <Tooltip
          cursor={{ stroke: "rgba(18,39,31,0.2)" }}
          contentStyle={{
            background: "#fbf9f4",
            border: "1px solid rgba(18,39,31,0.16)",
            borderRadius: 4,
            fontSize: 13,
          }}
          labelStyle={{ color: "#12271f", fontWeight: 500 }}
        />
        <Area
          type="monotone"
          dataKey="views"
          name="Page views"
          stroke={VIEWS}
          strokeWidth={2}
          fill="url(#fillViews)"
          activeDot={{ r: 4 }}
        />
        <Area
          type="monotone"
          dataKey="visitors"
          name="Unique visitors"
          stroke={VISITORS}
          strokeWidth={2}
          fill="url(#fillVisitors)"
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

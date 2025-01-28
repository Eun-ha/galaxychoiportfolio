"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

type Skills = {
  color: number;
  skills: number;
  angle: number;
  name: string;
};

export function Chart(Props: Skills) {
  const { color, skills, angle, name } = Props;
  const chartConfig = {
    skills: {
      label: "Skills",
    },
    fill: {
      label: "Skills",
      color: `hsl(var(--chart-${color}))`,
    },
  } satisfies ChartConfig;
  const chartData = [
    { browser: "skills", skills: `${skills}`, fill: "var(--color-fill)" },
  ];

  return (
    <ChartContainer config={chartConfig} className="wi-[172px] h-[172px]">
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={angle}
        innerRadius={80}
        outerRadius={110}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="skills" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="top"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-lg font-bold"
                    >
                      {chartData[0].skills.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground text-sm"
                    >
                      {name}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}

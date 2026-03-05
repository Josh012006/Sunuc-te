"use client";

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "./utils"

const THEMES = {
  light: "",
  dark: ".dark",
} as const

type ThemeKey = keyof typeof THEMES

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<ThemeKey, string> }
  )
>

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within ChartContainer")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ReactNode
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />

        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const entries = Object.entries(config).filter(
    ([, item]) => item.color || item.theme
  )

  if (!entries.length) return null

  const css = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const vars = entries
        .map(([key, item]) => {
          const color = item.theme?.[theme as ThemeKey] ?? item.color
          return color ? `--color-${key}: ${color};` : ""
        })
        .join("\n")

      return `${prefix} [data-chart="${id}"] { ${vars} }`
    })
    .join("\n")

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div">) {
  const { config } = useChart()

  if (!active || !payload?.length) return null

  return (
    <div
      className={cn(
        "bg-background border rounded-lg px-3 py-2 text-xs shadow-xl",
        className
      )}
    >
      {label && <div className="font-medium mb-1">{label}</div>}

      {payload.map((item: any, index: number) => {
        const dataKey = String(item.dataKey ?? index)
        const itemConfig = config[dataKey]

        return (
          <div
            key={dataKey}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded"
                style={{ backgroundColor: item.color }}
              />
              {itemConfig?.label ?? item.name}
            </span>

            <span className="font-mono">
              {typeof item.value === "number"
                ? item.value.toLocaleString()
                : item.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  payload,
  className,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload">) {
  const { config } = useChart()

  if (!payload?.length) return null

  return (
    <div className={cn("flex justify-center gap-4 pt-3", className)}>
      {payload.map((item: any, index: number) => {
        const dataKey = String(item.dataKey ?? index)
        const itemConfig = config[dataKey]

        return (
          <div key={dataKey} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded"
              style={{ backgroundColor: item.color }}
            />
            {itemConfig?.label ?? item.value}
          </div>
        )
      })}
    </div>
  )
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
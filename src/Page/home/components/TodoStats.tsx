import React from "react";
import type { TaskStats } from "../types";

interface TodoStatsProps {
  stats: TaskStats;
}

export const TodoStats: React.FC<TodoStatsProps> = ({ stats }) => {
  return (
    <div className="space-y-3">
      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {/* Total Tasks */}
        <div className="rounded-sm border border-zinc-800 bg-zinc-900/60 p-3.5">
          <p className="text-[11px] font-medium text-zinc-400">Total ToDo</p>
          <div className="mt-1.5 flex items-baseline justify-between">
            <span className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
              {stats.total}
            </span>
            <span className="text-[11px] text-zinc-500">tasks</span>
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-sm border border-zinc-800 bg-zinc-900/60 p-3.5">
          <p className="text-[11px] font-medium text-zinc-400">Pending</p>
          <div className="mt-1.5 flex items-baseline justify-between">
            <span className="text-xl font-semibold tracking-tight text-amber-400 sm:text-2xl">
              {stats.pending}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* In Progress */}
        <div className="rounded-sm border border-zinc-800 bg-zinc-900/60 p-3.5">
          <p className="text-[11px] font-medium text-zinc-400">In Progress</p>
          <div className="mt-1.5 flex items-baseline justify-between">
            <span className="text-xl font-semibold tracking-tight text-blue-400 sm:text-2xl">
              {stats.inProgress}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>
        </div>

        {/* Done */}
        <div className="rounded-sm border border-zinc-800 bg-zinc-900/60 p-3.5">
          <p className="text-[11px] font-medium text-zinc-400">Done</p>
          <div className="mt-1.5 flex items-baseline justify-between">
            <span className="text-xl font-semibold tracking-tight text-emerald-400 sm:text-2xl">
              {stats.completed}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>

      {/* Priority Breakdown Box */}
      <div className="flex flex-col gap-2 rounded-sm border border-zinc-800 bg-zinc-900/60 p-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-medium text-zinc-400">
          Priority Breakdown
        </span>

        <div className="flex items-center gap-2">
          {/* High */}
          <div className="flex items-center gap-1.5 rounded-sm border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs dark:border-rose-900/50 dark:bg-rose-950/30">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="text-zinc-400">High:</span>
            <span className="font-semibold text-rose-700 dark:text-rose-400">
              {stats.high}
            </span>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-1.5 rounded-sm border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs dark:border-amber-900/50 dark:bg-amber-950/30">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="text-zinc-400">Medium:</span>
            <span className="font-semibold text-amber-700 dark:text-amber-400">
              {stats.medium}
            </span>
          </div>

          {/* Low */}
          <div className="flex items-center gap-1.5 rounded-sm border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs dark:border-emerald-900/50 dark:bg-emerald-950/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-400">Low:</span>
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              {stats.low}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

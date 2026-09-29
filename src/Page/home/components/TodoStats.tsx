import React from "react";
import {
  ListTodo,
  Clock,
  Loader2,
  CheckCircle2,
  Flag,
} from "lucide-react";
import type { TaskStats } from "../types";

interface TodoStatsProps {
  stats: TaskStats;
}

export const TodoStats: React.FC<TodoStatsProps> = ({ stats }) => {
  return (
    <div className="space-y-4">
      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        {/* Total Tasks */}
        <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Total ToDo
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              <ListTodo className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
              {stats.total}
            </h2>
            <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
              Overall tasks
            </p>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="group relative overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/40 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-amber-900/40 dark:bg-amber-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Pending
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
              <Clock className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold tracking-tight text-amber-900 dark:text-amber-300 sm:text-3xl">
              {stats.pending}
            </h2>
            <p className="mt-0.5 text-xs text-amber-600/80 dark:text-amber-400/80">
              Awaiting action
            </p>
          </div>
        </div>

        {/* In Progress Tasks */}
        <div className="group relative overflow-hidden rounded-2xl border border-blue-200/60 bg-blue-50/40 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-blue-900/40 dark:bg-blue-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
              In Progress
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-300 sm:text-3xl">
              {stats.inProgress}
            </h2>
            <p className="mt-0.5 text-xs text-blue-600/80 dark:text-blue-400/80">
              Currently ongoing
            </p>
          </div>
        </div>

        {/* Done Tasks */}
        <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
              Done
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-300 sm:text-3xl">
              {stats.completed}
            </h2>
            <p className="mt-0.5 text-xs text-emerald-600/80 dark:text-emerald-400/80">
              Tasks finished
            </p>
          </div>
        </div>
      </div>

      {/* Priority Breakdown Box */}
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Flag className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Priority Overview
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* High Priority */}
            <div className="flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-1.5 ring-1 ring-inset ring-rose-200/60 dark:bg-rose-950/30 dark:ring-rose-900/40">
              <span className="flex h-2 w-2 rounded-full bg-rose-500" />
              <span className="text-xs font-medium text-rose-700 dark:text-rose-400">
                High:
              </span>
              <span className="rounded-full bg-rose-100 px-1.5 py-0.2 text-xs font-bold text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">
                {stats.high}
              </span>
            </div>

            {/* Medium Priority */}
            <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-1.5 ring-1 ring-inset ring-amber-200/60 dark:bg-amber-950/30 dark:ring-amber-900/40">
              <span className="flex h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                Medium:
              </span>
              <span className="rounded-full bg-amber-100 px-1.5 py-0.2 text-xs font-bold text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                {stats.medium}
              </span>
            </div>

            {/* Low Priority */}
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 ring-1 ring-inset ring-emerald-200/60 dark:bg-emerald-950/30 dark:ring-emerald-900/40">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Low:
              </span>
              <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-xs font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                {stats.low}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

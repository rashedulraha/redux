import React from "react";
import { CheckSquare } from "lucide-react";
import { TodoItem } from "./TodoItem";
import { Button } from "@/Components/ui/button";
import type { TaskItem } from "../types";

interface TodoListProps {
  tasks: TaskItem[];
  totalCount: number;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: TaskItem["status"]) => void;
  onOpenNewTask: () => void;
  onResetFilters: () => void;
  isFiltered: boolean;
}

export const TodoList: React.FC<TodoListProps> = ({
  tasks,
  totalCount,
  onToggleComplete,
  onDelete,
  onStatusChange,
  onOpenNewTask,
  onResetFilters,
  isFiltered,
}) => {
  const completedCount = tasks.filter((t) => t.status === "completed").length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="rounded border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/50">
      {/* Box Header */}
      <div className="flex flex-col gap-2 border-b border-zinc-200/80 px-4 py-3 dark:border-zinc-800/80 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            Task List
          </h2>
          <span className="rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.2 text-[10px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
            {tasks.length}
            {isFiltered && ` of ${totalCount}`}
          </span>
        </div>

        {tasks.length > 0 && (
          <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <span>
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                {pendingCount}
              </strong>{" "}
              pending
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                {completedCount}
              </strong>{" "}
              done
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-3 sm:p-4">
        {tasks.length > 0 ? (
          <div className="space-y-2">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
                onStatusChange={onStatusChange}
              />
            ))}
          </div>
        ) : (
          /* Apple-inspired Minimal Empty State */
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
              <CheckSquare className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {isFiltered ? "No matching tasks" : "No tasks yet"}
            </h3>
            <p className="mt-1 max-w-sm text-xs text-zinc-500 dark:text-zinc-400">
              {isFiltered
                ? "No tasks match your active filter settings. Reset filters to see all tasks."
                : "Your task list is clean and ready. Click New Task above to add your first item."}
            </p>
            <div className="mt-4">
              {isFiltered ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onResetFilters}
                  className="rounded text-xs"
                >
                  Reset Filters
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={onOpenNewTask}
                  className="rounded text-xs"
                >
                  Create First Task
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Box Footer Note */}
      <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/50 px-4 py-2 text-[11px] text-zinc-400 dark:border-zinc-800/60 dark:bg-zinc-950/30 dark:text-zinc-500">
        <span>Redux Toolkit state UI</span>
        <span>Empty state ready</span>
      </div>
    </div>
  );
};

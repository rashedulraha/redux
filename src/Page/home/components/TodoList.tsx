import React from "react";
import { ListFilter, Inbox, Sparkles } from "lucide-react";
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
    <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {/* Box Header */}
      <div className="flex flex-col gap-2 border-b border-zinc-200/80 px-5 py-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            <ListFilter className="h-3.5 w-3.5" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Task Data & Activities
            </h2>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
              {isFiltered && ` (of ${totalCount})`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span>
            <strong className="text-zinc-900 dark:text-zinc-200">
              {pendingCount}
            </strong>{" "}
            remaining
          </span>
          <span>•</span>
          <span>
            <strong className="text-zinc-900 dark:text-zinc-200">
              {completedCount}
            </strong>{" "}
            completed
          </span>
        </div>
      </div>

      {/* Box Content - List of Tasks */}
      <div className="p-4 sm:p-5">
        {tasks.length > 0 ? (
          <div className="space-y-2.5">
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
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
              <Inbox className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              No tasks found
            </h3>
            <p className="mt-1 max-w-sm text-xs text-zinc-500 dark:text-zinc-400">
              {isFiltered
                ? "No tasks match your current filter and search criteria. Try resetting filters."
                : "You don't have any tasks in your list yet. Start by creating your first task!"}
            </p>
            <div className="mt-5 flex gap-2.5">
              {isFiltered ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onResetFilters}
                  className="rounded-xl"
                >
                  Reset Filters
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={onOpenNewTask}
                  className="rounded-xl"
                >
                  Create New Task
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Box Footer info */}
      <div className="flex flex-col gap-2 rounded-b-2xl border-t border-zinc-100 bg-zinc-50/50 px-5 py-3 text-xs text-zinc-500 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          <span>
            Redux Toolkit ready: Actions and selectors can easily replace local
            state handlers.
          </span>
        </div>
        <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
          Interactive UI preview
        </span>
      </div>
    </div>
  );
};

import React from "react";
import {
  Calendar,
  Check,
  Trash2,
  Edit3,
  Clock,
  Loader2,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import type { TaskItem } from "../types";

interface TodoItemProps {
  task: TaskItem;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: TaskItem["status"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
  onStatusChange,
}) => {
  const isDone = task.status === "completed";

  // Status badge styling
  const renderStatusBadge = () => {
    switch (task.status) {
      case "completed":
        return (
          <Badge variant="success" className="gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Done
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="info" className="gap-1">
            <Loader2 className="h-3 w-3 animate-spin" />
            In Progress
          </Badge>
        );
      case "pending":
      default:
        return (
          <Badge variant="warning" className="gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
    }
  };

  // Priority badge styling
  const renderPriorityBadge = () => {
    switch (task.priority) {
      case "high":
        return (
          <Badge variant="destructive" className="gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            High
          </Badge>
        );
      case "medium":
        return (
          <Badge variant="warning" className="gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Medium
          </Badge>
        );
      case "low":
        return (
          <Badge variant="secondary" className="gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Low
          </Badge>
        );
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between gap-4 rounded-xl border p-4 transition-all duration-150 sm:flex-row sm:items-center ${
        isDone
          ? "border-zinc-200/60 bg-zinc-50/50 dark:border-zinc-800/60 dark:bg-zinc-950/40"
          : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
      }`}
    >
      {/* Left side: Checkbox + Content */}
      <div className="flex items-start gap-3.5 sm:items-center">
        {/* Checkbox */}
        <button
          type="button"
          onClick={() => onToggleComplete(task.id)}
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border transition-all ${
            isDone
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-zinc-300 bg-white hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800"
          }`}
          aria-label={isDone ? "Mark as pending" : "Mark as completed"}
        >
          {isDone && <Check className="h-3.5 w-3.5 stroke-[3]" />}
        </button>

        {/* Text information */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`text-sm font-semibold tracking-tight transition-all ${
                isDone
                  ? "text-zinc-400 line-through dark:text-zinc-500"
                  : "text-zinc-900 dark:text-zinc-100"
              }`}
            >
              {task.title}
            </h3>

            {/* Category tag */}
            {task.category && (
              <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                <Tag className="h-2.5 w-2.5" />
                {task.category}
              </span>
            )}
          </div>

          {task.description && (
            <p
              className={`text-xs ${
                isDone
                  ? "text-zinc-400 line-through dark:text-zinc-500"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {task.description}
            </p>
          )}

          {/* Due date & timestamps */}
          <div className="flex items-center gap-3 pt-0.5 text-[11px] text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Due: {task.dueDate}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Badges & Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-3 sm:border-t-0 sm:pt-0">
        <div className="flex items-center gap-2">
          {renderStatusBadge()}
          {renderPriorityBadge()}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          {/* Quick status switch */}
          <select
            value={task.status}
            onChange={(e) =>
              onStatusChange(task.id, e.target.value as TaskItem["status"])
            }
            className="h-8 rounded-lg border border-zinc-200 bg-white px-2 text-[11px] font-medium text-zinc-600 shadow-xs hover:bg-zinc-50 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            aria-label="Change task status"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Done</option>
          </select>

          {/* Edit Action */}
          <button
            type="button"
            onClick={() => console.log("Edit task UI clicked:", task.id)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            title="Edit task"
            aria-label="Edit task"
          >
            <Edit3 className="h-4 w-4" />
          </button>

          {/* Delete Action */}
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40 dark:hover:text-rose-400"
            title="Delete task"
            aria-label="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

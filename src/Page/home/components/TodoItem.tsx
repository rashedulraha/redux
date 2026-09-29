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
import { CustomSelect, type SelectOption } from "@/Components/ui/select";
import type { TaskItem } from "../types";

interface TodoItemProps {
  task: TaskItem;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: TaskItem["status"]) => void;
}

const TASK_STATUS_OPTIONS: SelectOption[] = [
  { value: "pending", label: "Pending", dotColor: "bg-amber-500" },
  { value: "in-progress", label: "In Progress", dotColor: "bg-blue-500" },
  { value: "completed", label: "Done", dotColor: "bg-emerald-500" },
];

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
          <Badge variant="success" className="gap-1 text-[11px] rounded-sm">
            <CheckCircle2 className="h-2.5 w-2.5" />
            Done
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="info" className="gap-1 text-[11px] rounded-sm">
            <Loader2 className="h-2.5 w-2.5 animate-spin" />
            In Progress
          </Badge>
        );
      case "pending":
      default:
        return (
          <Badge variant="warning" className="gap-1 text-[11px] rounded-sm">
            <Clock className="h-2.5 w-2.5" />
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
          <Badge variant="destructive" className="gap-1 text-[11px] rounded-sm">
            <span className="h-1 w-1 rounded-full bg-rose-500" />
            High
          </Badge>
        );
      case "medium":
        return (
          <Badge variant="warning" className="gap-1 text-[11px] rounded-sm">
            <span className="h-1 w-1 rounded-full bg-amber-500" />
            Medium
          </Badge>
        );
      case "low":
        return (
          <Badge variant="secondary" className="gap-1 text-[11px] rounded-sm">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            Low
          </Badge>
        );
    }
  };

  return (
    <div
      className={`group flex flex-col justify-between gap-3 rounded-sm border p-3 transition-colors sm:flex-row sm:items-center ${
        isDone
          ? "border-zinc-850 bg-zinc-950/60"
          : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
      }`}
    >
      {/* Left side: Checkbox + Content */}
      <div className="flex items-start gap-3 sm:items-center">
        {/* Apple-style clean Checkbox */}
        <button
          type="button"
          onClick={() => onToggleComplete(task.id)}
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors ${
            isDone
              ? "border-emerald-600 bg-emerald-600 text-white"
              : "border-zinc-700 bg-zinc-850 hover:border-zinc-500 text-transparent"
          }`}
          aria-label={isDone ? "Mark as pending" : "Mark as completed"}
        >
          {isDone && <Check className="h-3 w-3 stroke-[3]" />}
        </button>

        {/* Text information */}
        <div className="space-y-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`text-xs font-medium tracking-tight sm:text-sm ${
                isDone
                  ? "text-zinc-500 line-through"
                  : "text-zinc-100"
              }`}
            >
              {task.title}
            </h3>

            {/* Category tag */}
            {task.category && (
              <span className="inline-flex items-center gap-1 rounded-sm border border-zinc-800 bg-zinc-850 px-1.5 py-0.2 text-[10px] text-zinc-400">
                <Tag className="h-2 w-2" />
                {task.category}
              </span>
            )}
          </div>

          {task.description && (
            <p
              className={`text-xs ${
                isDone
                  ? "text-zinc-500 line-through"
                  : "text-zinc-400"
              }`}
            >
              {task.description}
            </p>
          )}

          {/* Due date */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5" />
              Due: {task.dueDate}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Badges & Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-850 pt-2 sm:border-t-0 sm:pt-0">
        <div className="flex items-center gap-1.5">
          {renderStatusBadge()}
          {renderPriorityBadge()}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5">
          {/* Custom status selector matching dark theme */}
          <CustomSelect
            value={task.status}
            onValueChange={(val) =>
              onStatusChange(task.id, val as TaskItem["status"])
            }
            options={TASK_STATUS_OPTIONS}
            triggerClassName="h-7 w-28 text-[11px] rounded-md border-zinc-800 bg-zinc-850"
            aria-label="Change task status"
          />

          {/* Edit Action Button */}
          <button
            type="button"
            onClick={() => console.log("Edit task clicked:", task.id)}
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
            title="Edit task"
            aria-label="Edit task"
          >
            <Edit3 className="h-3.5 w-3.5" />
          </button>

          {/* Delete Action Button */}
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-rose-950/40 hover:text-rose-400"
            title="Delete task"
            aria-label="Delete task"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

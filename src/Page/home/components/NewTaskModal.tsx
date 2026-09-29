import React, { useState } from "react";
import { Plus, Calendar, Flag, Tag, Clock } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/Components/ui/dialog";
import type { TaskItem, TaskPriority, TaskStatus } from "../types";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Omit<TaskItem, "id" | "createdAt">) => void;
}

export const NewTaskModal: React.FC<NewTaskModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");
  const [status, setStatus] = useState<TaskStatus>("pending");
  const [dueDate, setDueDate] = useState("Tomorrow");
  const [category, setCategory] = useState("Redux Toolkit");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskPayload: Omit<TaskItem, "id" | "createdAt"> = {
      title: title.trim(),
      description: description.trim(),
      priority,
      status,
      dueDate: dueDate.trim() || "No due date",
      category: category.trim() || "General",
    };

    // User requirement: console.log the data on submit
    console.log("New Task Submitted to Redux UI:", taskPayload);

    onSubmit(taskPayload);

    // Reset fields & close
    setTitle("");
    setDescription("");
    setPriority("medium");
    setStatus("pending");
    setDueDate("Tomorrow");
    setCategory("Redux Toolkit");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent onClose={onClose} className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              <Plus className="h-4 w-4" />
            </div>
            <div>
              <DialogTitle>Create New Task</DialogTitle>
              <DialogDescription>
                Add a new task to your Redux state management workflow
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Task Title */}
          <div className="space-y-1.5">
            <label
              htmlFor="task-title"
              className="text-xs font-semibold text-zinc-700 dark:text-zinc-300"
            >
              Task Title <span className="text-rose-500">*</span>
            </label>
            <Input
              id="task-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Implement createAsyncThunk for API call"
              required
              autoFocus
              className="rounded-xl"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label
              htmlFor="task-desc"
              className="text-xs font-semibold text-zinc-700 dark:text-zinc-300"
            >
              Description
            </label>
            <textarea
              id="task-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add task notes, acceptance criteria, or implementation details..."
              className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 shadow-sm transition-colors placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-100 dark:focus:ring-zinc-100"
            />
          </div>

          {/* Priority & Status in 2 columns */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Priority */}
            <div className="space-y-1.5">
              <label
                htmlFor="task-priority"
                className="flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
              >
                <Flag className="h-3.5 w-3.5 text-zinc-400" />
                Priority
              </label>
              <select
                id="task-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
                className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm transition-colors focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                <option value="high">🔴 High Priority</option>
                <option value="medium">🟡 Medium Priority</option>
                <option value="low">🟢 Low Priority</option>
              </select>
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <label
                htmlFor="task-status"
                className="flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
              >
                <Clock className="h-3.5 w-3.5 text-zinc-400" />
                Initial Status
              </label>
              <select
                id="task-status"
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
                className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm transition-colors focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Done</option>
              </select>
            </div>
          </div>

          {/* Due Date & Category in 2 columns */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Due Date */}
            <div className="space-y-1.5">
              <label
                htmlFor="task-duedate"
                className="flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
              >
                <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                Due Date / Target
              </label>
              <Input
                id="task-duedate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="e.g. Tomorrow, Oct 15"
                className="rounded-xl"
              />
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label
                htmlFor="task-category"
                className="flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
              >
                <Tag className="h-3.5 w-3.5 text-zinc-400" />
                Category / Tag
              </label>
              <Input
                id="task-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Redux Toolkit, API"
                className="rounded-xl"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="rounded-xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
            >
              <Plus className="mr-1.5 h-4 w-4" />
              Create Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

import React, { useState } from "react";
import { Plus, Calendar, Flag, Tag, Clock } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { CustomSelect, type SelectOption } from "@/Components/ui/select";
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

const MODAL_PRIORITY_OPTIONS: SelectOption[] = [
  { value: "high", label: "High Priority", dotColor: "bg-rose-500" },
  { value: "medium", label: "Medium Priority", dotColor: "bg-amber-500" },
  { value: "low", label: "Low Priority", dotColor: "bg-emerald-500" },
];

const MODAL_STATUS_OPTIONS: SelectOption[] = [
  { value: "pending", label: "Pending", dotColor: "bg-amber-500" },
  { value: "in-progress", label: "In Progress", dotColor: "bg-blue-500" },
  { value: "completed", label: "Done", dotColor: "bg-emerald-500" },
];

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
      <DialogContent onClose={onClose} className="rounded-sm border border-zinc-800 bg-zinc-950 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>
            Enter task details to manage via Redux Toolkit state
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3.5 pt-3">
          {/* Task Title */}
          <div className="space-y-1">
            <label
              htmlFor="task-title"
              className="text-xs font-medium text-zinc-300"
            >
              Task Title <span className="text-rose-400">*</span>
            </label>
            <Input
              id="task-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Implement createSlice for Todo state"
              required
              autoFocus
              className="h-8 rounded-sm text-xs"
            />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label
              htmlFor="task-desc"
              className="text-xs font-medium text-zinc-300"
            >
              Description
            </label>
            <textarea
              id="task-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details, acceptance criteria, or notes..."
              className="w-full rounded-sm border border-zinc-800 bg-zinc-900 p-2.5 text-xs text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none"
            />
          </div>

          {/* Priority & Status with CustomSelect */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {/* Priority */}
            <div className="space-y-1">
              <label
                className="flex items-center gap-1 text-xs font-medium text-zinc-300"
              >
                <Flag className="h-3 w-3 text-zinc-500" />
                Priority
              </label>
              <CustomSelect
                value={priority}
                onValueChange={(val) => setPriority(val as TaskPriority)}
                options={MODAL_PRIORITY_OPTIONS}
                className="w-full"
                triggerClassName="w-full h-8 rounded-sm border-zinc-800 bg-zinc-900"
              />
            </div>

            {/* Status */}
            <div className="space-y-1">
              <label
                className="flex items-center gap-1 text-xs font-medium text-zinc-300"
              >
                <Clock className="h-3 w-3 text-zinc-500" />
                Initial Status
              </label>
              <CustomSelect
                value={status}
                onValueChange={(val) => setStatus(val as TaskStatus)}
                options={MODAL_STATUS_OPTIONS}
                className="w-full"
                triggerClassName="w-full h-8 rounded-sm border-zinc-800 bg-zinc-900"
              />
            </div>
          </div>

          {/* Due Date & Category in 2 columns */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {/* Due Date */}
            <div className="space-y-1">
              <label
                htmlFor="task-duedate"
                className="flex items-center gap-1 text-xs font-medium text-zinc-300"
              >
                <Calendar className="h-3 w-3 text-zinc-500" />
                Due Date
              </label>
              <Input
                id="task-duedate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="e.g. Tomorrow"
                className="h-8 rounded-sm text-xs"
              />
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label
                htmlFor="task-category"
                className="flex items-center gap-1 text-xs font-medium text-zinc-300"
              >
                <Tag className="h-3 w-3 text-zinc-500" />
                Category
              </label>
              <Input
                id="task-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Redux Toolkit"
                className="h-8 rounded-sm text-xs"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="h-8 rounded-md text-xs border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="h-8 gap-1.5 rounded-md bg-white text-xs font-medium text-zinc-950 hover:bg-zinc-200"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Create Task</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

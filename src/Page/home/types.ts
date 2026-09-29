export type TaskStatus = "pending" | "in-progress" | "completed";
export type TaskPriority = "high" | "medium" | "low";

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  category: string;
  createdAt: string;
}

export interface TaskStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  high: number;
  medium: number;
  low: number;
}

export type FilterStatus = "all" | TaskStatus;
export type FilterPriority = "all" | TaskPriority;
export type SortOption = "newest" | "oldest" | "priority" | "due-date" | "title";

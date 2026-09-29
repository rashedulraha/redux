import React, { useState, useMemo } from "react";
import Container from "@/Components/Container/Container";
import { TodoHeader } from "./components/TodoHeader";
import { TodoStats } from "./components/TodoStats";
import { TodoFilters } from "./components/TodoFilters";
import { TodoList } from "./components/TodoList";
import { NewTaskModal } from "./components/NewTaskModal";
import Counter from "./shared/Counter";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import type {
  TaskItem,
  TaskStats,
  FilterStatus,
  FilterPriority,
  SortOption,
} from "./types";

const INITIAL_TASKS: TaskItem[] = [
  {
    id: "task-1",
    title: "Configure Redux Toolkit Store & Root Reducer",
    description:
      "Setup configureStore with TypeScript types for RootState and AppDispatch in src/Redux/store.ts",
    status: "completed",
    priority: "high",
    dueDate: "Completed",
    category: "Redux Setup",
    createdAt: "2026-09-28T09:00:00Z",
  },
  {
    id: "task-2",
    title: "Implement TodoSlice with createSlice",
    description:
      "Define reducers for addTodo, toggleTodo, deleteTodo, and filterTodo with typed action payloads",
    status: "in-progress",
    priority: "high",
    dueDate: "Today",
    category: "Redux Toolkit",
    createdAt: "2026-09-29T08:00:00Z",
  },
  {
    id: "task-3",
    title: "Connect Todo Components via useAppDispatch & useAppSelector",
    description:
      "Replace component local state with Redux selectors and dispatch actions for full global state control",
    status: "pending",
    priority: "medium",
    dueDate: "Tomorrow",
    category: "React-Redux",
    createdAt: "2026-09-29T08:30:00Z",
  },
  {
    id: "task-4",
    title: "Explore createAsyncThunk for Simulated API Sync",
    description:
      "Add asynchronous thunk to fetch mock todos from JSONPlaceholder and handle pending/fulfilled/rejected states",
    status: "pending",
    priority: "medium",
    dueDate: "In 2 days",
    category: "Async Thunks",
    createdAt: "2026-09-29T09:15:00Z",
  },
  {
    id: "task-5",
    title: "Setup Redux DevTools & Action Logger",
    description:
      "Inspect dispatched actions, state transitions, time-travel debugging, and state snapshots",
    status: "completed",
    priority: "low",
    dueDate: "Yesterday",
    category: "DevTools",
    createdAt: "2026-09-27T10:00:00Z",
  },
];

const HomePage: React.FC = () => {
  // Task items state (UI ready for Redux slice migration)
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  // Filter and Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");
  const [priorityFilter, setPriorityFilter] = useState<FilterPriority>("all");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // Calculate statistics for the box system
  const stats: TaskStats = useMemo(() => {
    return {
      total: tasks.length,
      pending: tasks.filter((t) => t.status === "pending").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      completed: tasks.filter((t) => t.status === "completed").length,
      high: tasks.filter((t) => t.priority === "high").length,
      medium: tasks.filter((t) => t.priority === "medium").length,
      low: tasks.filter((t) => t.priority === "low").length,
    };
  }, [tasks]);

  // Handle task actions
  const handleToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const nextStatus =
            task.status === "completed" ? "pending" : "completed";
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleStatusChange = (id: string, newStatus: TaskItem["status"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleCreateTask = (newTaskData: Omit<TaskItem, "id" | "createdAt">) => {
    const newTask: TaskItem = {
      ...newTaskData,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setPriorityFilter("all");
    setSortOption("newest");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    statusFilter !== "all" ||
    priorityFilter !== "all" ||
    sortOption !== "newest";

  // Filtered and sorted tasks
  const filteredTasks = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return tasks
      .filter((task) => {
        // Search query filter
        if (query) {
          const matchesTitle = task.title.toLowerCase().includes(query);
          const matchesDesc = task.description.toLowerCase().includes(query);
          const matchesCategory = task.category.toLowerCase().includes(query);
          if (!matchesTitle && !matchesDesc && !matchesCategory) return false;
        }

        // Status filter
        if (statusFilter !== "all" && task.status !== statusFilter) {
          return false;
        }

        // Priority filter
        if (priorityFilter !== "all" && task.priority !== priorityFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOption === "newest") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
        if (sortOption === "oldest") {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        }
        if (sortOption === "priority") {
          const weight = { high: 3, medium: 2, low: 1 };
          return weight[b.priority] - weight[a.priority];
        }
        if (sortOption === "title") {
          return a.title.localeCompare(b.title);
        }
        if (sortOption === "due-date") {
          return a.dueDate.localeCompare(b.dueDate);
        }
        return 0;
      });
  }, [tasks, searchQuery, statusFilter, priorityFilter, sortOption]);

  return (
    <div className="min-h-screen bg-zinc-50/60 py-8 dark:bg-zinc-950 sm:py-12">
      <Container className="max-w-5xl space-y-6 sm:space-y-8">
        {/* 1. Header with Redux ToDo, Subtitle, and New Task button */}
        <TodoHeader onOpenNewTask={() => setIsModalOpen(true)} />

        {/* 2. Stats box system: Total, Pending, In Progress, Done, High, Medium, Low */}
        <TodoStats stats={stats} />

        {/* 3. Search Bar + 3 Dropdowns (Status, Priority, Sort) + Clear button */}
        <TodoFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          priorityFilter={priorityFilter}
          onPriorityFilterChange={setPriorityFilter}
          sortOption={sortOption}
          onSortOptionChange={setSortOption}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* 4. Task Box: Data list and activity actions (toggle, delete, edit UI) */}
        <TodoList
          tasks={filteredTasks}
          totalCount={tasks.length}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
          onOpenNewTask={() => setIsModalOpen(true)}
          onResetFilters={handleClearFilters}
          isFiltered={hasActiveFilters}
        />

        {/* Modal: New Task Modal Dialog */}
        <NewTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateTask}
        />

        {/* Optional Collapsible for Redux Counter practice */}
        <div className="pt-6">
          <button
            type="button"
            onClick={() => setShowCounter((prev) => !prev)}
            className="flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>
              {showCounter ? "Hide" : "Show"} Redux Counter Practice Widget
            </span>
            {showCounter ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </button>

          {showCounter && (
            <div className="mt-4 flex justify-center rounded-2xl border border-dashed border-zinc-300 bg-white/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <Counter />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

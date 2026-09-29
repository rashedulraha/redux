import React from "react";
import { Search, ChevronDown, RotateCcw, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import type { FilterStatus, FilterPriority, SortOption } from "../types";

interface TodoFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: FilterStatus;
  onStatusFilterChange: (status: FilterStatus) => void;
  priorityFilter: FilterPriority;
  onPriorityFilterChange: (priority: FilterPriority) => void;
  sortOption: SortOption;
  onSortOptionChange: (sort: SortOption) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export const TodoFilters: React.FC<TodoFiltersProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  priorityFilter,
  onPriorityFilterChange,
  sortOption,
  onSortOptionChange,
  onClearFilters,
  hasActiveFilters,
}) => {
  return (
    <div className="flex flex-col gap-2.5 rounded border border-zinc-200/80 bg-white p-3 dark:border-zinc-800/80 dark:bg-zinc-900/50 sm:flex-row sm:items-center">
      {/* Search Bar */}
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="h-8 w-full rounded border border-zinc-200 bg-zinc-50/60 pl-8 pr-7 text-xs text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-zinc-900 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-100"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            aria-label="Clear search query"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* 3 Dropdowns + Clear Button */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Dropdown 1: Status */}
        <div className="relative flex-1 sm:flex-none">
          <select
            value={statusFilter}
            onChange={(e) =>
              onStatusFilterChange(e.target.value as FilterStatus)
            }
            className="h-8 w-full cursor-pointer appearance-none rounded border border-zinc-200 bg-white pl-2.5 pr-6 text-xs text-zinc-700 transition-colors hover:bg-zinc-50 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 sm:w-32"
            aria-label="Filter by Status"
          >
            <option value="all">Status: All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-zinc-400" />
        </div>

        {/* Dropdown 2: Priority */}
        <div className="relative flex-1 sm:flex-none">
          <select
            value={priorityFilter}
            onChange={(e) =>
              onPriorityFilterChange(e.target.value as FilterPriority)
            }
            className="h-8 w-full cursor-pointer appearance-none rounded border border-zinc-200 bg-white pl-2.5 pr-6 text-xs text-zinc-700 transition-colors hover:bg-zinc-50 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 sm:w-32"
            aria-label="Filter by Priority"
          >
            <option value="all">Priority: All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-zinc-400" />
        </div>

        {/* Dropdown 3: Sort By */}
        <div className="relative flex-1 sm:flex-none">
          <select
            value={sortOption}
            onChange={(e) => onSortOptionChange(e.target.value as SortOption)}
            className="h-8 w-full cursor-pointer appearance-none rounded border border-zinc-200 bg-white pl-2.5 pr-6 text-xs text-zinc-700 transition-colors hover:bg-zinc-50 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 sm:w-36"
            aria-label="Sort Tasks"
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
            <option value="priority">Sort: Priority</option>
            <option value="due-date">Sort: Due Date</option>
            <option value="title">Sort: Title</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-zinc-400" />
        </div>

        {/* Clear Button */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          disabled={!hasActiveFilters}
          className="h-8 gap-1 rounded border-zinc-200 px-2.5 text-xs text-zinc-600 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Clear</span>
        </Button>
      </div>
    </div>
  );
};

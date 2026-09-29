import React from "react";
import { Search, RotateCcw, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { CustomSelect, type SelectOption } from "@/Components/ui/select";
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

const STATUS_OPTIONS: SelectOption[] = [
  { value: "all", label: "Status: All" },
  { value: "pending", label: "Pending", dotColor: "bg-amber-500" },
  { value: "in-progress", label: "In Progress", dotColor: "bg-blue-500" },
  { value: "completed", label: "Completed", dotColor: "bg-emerald-500" },
];

const PRIORITY_OPTIONS: SelectOption[] = [
  { value: "all", label: "Priority: All" },
  { value: "high", label: "High", dotColor: "bg-rose-500" },
  { value: "medium", label: "Medium", dotColor: "bg-amber-500" },
  { value: "low", label: "Low", dotColor: "bg-emerald-500" },
];

const SORT_OPTIONS: SelectOption[] = [
  { value: "newest", label: "Sort: Newest" },
  { value: "oldest", label: "Sort: Oldest" },
  { value: "priority", label: "Sort: Priority" },
  { value: "due-date", label: "Sort: Due Date" },
  { value: "title", label: "Sort: Title" },
];

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
    <div className="flex flex-col gap-2.5 rounded-sm border border-zinc-800 bg-zinc-900/60 p-3 sm:flex-row sm:items-center">
      {/* Search Bar */}
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="h-8 w-full rounded-sm border border-zinc-800 bg-zinc-900 pl-8 pr-7 text-xs text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            aria-label="Clear search query"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* 3 Custom Dropdowns + Clear Button */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Dropdown 1: Status */}
        <CustomSelect
          value={statusFilter}
          onValueChange={(val) => onStatusFilterChange(val as FilterStatus)}
          options={STATUS_OPTIONS}
          aria-label="Filter by Status"
          className="flex-1 sm:w-32 sm:flex-none"
        />

        {/* Dropdown 2: Priority */}
        <CustomSelect
          value={priorityFilter}
          onValueChange={(val) => onPriorityFilterChange(val as FilterPriority)}
          options={PRIORITY_OPTIONS}
          aria-label="Filter by Priority"
          className="flex-1 sm:w-32 sm:flex-none"
        />

        {/* Dropdown 3: Sort By */}
        <CustomSelect
          value={sortOption}
          onValueChange={(val) => onSortOptionChange(val as SortOption)}
          options={SORT_OPTIONS}
          aria-label="Sort Tasks"
          className="flex-1 sm:w-34 sm:flex-none"
        />

        {/* Clear Button */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          disabled={!hasActiveFilters}
          className="h-8 gap-1 rounded-md border-zinc-800 bg-zinc-900 px-2.5 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white disabled:opacity-40"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Clear</span>
        </Button>
      </div>
    </div>
  );
};

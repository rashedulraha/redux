import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";

interface TodoHeaderProps {
  onOpenNewTask: () => void;
}

export const TodoHeader: React.FC<TodoHeaderProps> = ({ onOpenNewTask }) => {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200/70 pb-5 dark:border-zinc-800/70">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            Redux ToDo
          </h1>
          <span className="rounded border border-zinc-200 bg-zinc-100/70 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300">
            RTK
          </span>
        </div>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          State Management using Redux Toolkit
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={onOpenNewTask}
          size="sm"
          className="h-8 gap-1.5 rounded bg-zinc-900 px-3 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>New Task</span>
        </Button>
      </div>
    </header>
  );
};

import React from "react";
import { Plus, Sparkles, CheckSquare } from "lucide-react";
import { Button } from "@/Components/ui/button";

interface TodoHeaderProps {
  onOpenNewTask: () => void;
}

export const TodoHeader: React.FC<TodoHeaderProps> = ({ onOpenNewTask }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200/80 pb-6 dark:border-zinc-800">
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-900">
            <CheckSquare className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                Redux ToDo
              </h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-950/50 dark:text-indigo-400 dark:ring-indigo-400/20">
                <Sparkles className="h-3 w-3" />
                RTK
              </span>
            </div>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
              State Management using Redux Toolkit
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={onOpenNewTask}
          className="h-10 gap-2 rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>New Task</span>
        </Button>
      </div>
    </div>
  );
};

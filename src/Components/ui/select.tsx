import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  dotColor?: string;
}

interface CustomSelectProps {
  value: string;
  onValueChange: (val: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  "aria-label"?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  className,
  triggerClassName,
  "aria-label": ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block w-full sm:w-auto", className)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        className={cn(
          "flex h-8 w-full items-center justify-between gap-2 rounded-sm border border-zinc-800 bg-zinc-900 px-2.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-850 hover:text-zinc-100 focus:border-zinc-500 focus:outline-none",
          triggerClassName
        )}
      >
        <span className="flex items-center gap-1.5 truncate">
          {selectedOption?.dotColor && (
            <span
              className={cn("h-1.5 w-1.5 rounded-full shrink-0", selectedOption.dotColor)}
            />
          )}
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-3 w-3 shrink-0 text-zinc-500 transition-transform duration-150",
            isOpen && "rotate-180 text-zinc-300"
          )}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1 min-w-full sm:min-w-[140px] rounded-sm border border-zinc-800 bg-zinc-900 py-1 shadow-none backdrop-blur-md"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onValueChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between px-2.5 py-1.5 text-left text-xs transition-colors rounded-sm",
                  isSelected
                    ? "bg-zinc-800/80 text-white font-medium"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                )}
              >
                <span className="flex items-center gap-1.5 truncate">
                  {option.dotColor && (
                    <span
                      className={cn("h-1.5 w-1.5 rounded-full shrink-0", option.dotColor)}
                    />
                  )}
                  <span className="truncate">{option.label}</span>
                </span>
                {isSelected && (
                  <Check className="ml-2 h-3 w-3 shrink-0 text-zinc-200" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

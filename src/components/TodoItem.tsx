
import { cn } from "@/lib/utils";
import { Check, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn(
        "group flex items-center justify-between p-4 mb-3 rounded-xl bg-[#221F26]/50 backdrop-blur-sm border border-[#403E43]/20 transition-all duration-200 hover:bg-[#221F26]/70",
        completed && "bg-[#221F26]/30"
      )}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(id)}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
            completed
              ? "border-[#9b87f5] bg-[#9b87f5] text-white"
              : "border-[#403E43] hover:border-[#9b87f5]"
          )}
        >
          {completed && <Check size={14} />}
        </button>
        <span
          className={cn(
            "text-[#D6BCFA] transition-all duration-200",
            completed && "text-[#D6BCFA]/40 line-through"
          )}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 text-[#D6BCFA]/40 hover:text-[#FF6B6B] transition-all duration-200"
      >
        <Trash2 size={18} />
      </button>
    </motion.div>
  );
};


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
        "group flex items-center justify-between p-4 mb-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md",
        completed && "bg-gray-50/80"
      )}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(id)}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
            completed
              ? "border-todo-purple bg-todo-purple text-white"
              : "border-gray-300 hover:border-todo-purple"
          )}
        >
          {completed && <Check size={14} />}
        </button>
        <span
          className={cn(
            "text-gray-800 transition-all duration-200",
            completed && "text-gray-400 line-through"
          )}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-todo-rose transition-all duration-200"
      >
        <Trash2 size={18} />
      </button>
    </motion.div>
  );
};


import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 mb-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-xl border border-[#403E43]/20 bg-[#221F26]/50 backdrop-blur-sm text-[#D6BCFA] placeholder:text-[#D6BCFA]/30 focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-200"
      />
      <button
        type="submit"
        className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] text-white shadow-sm hover:shadow-[#9b87f5]/20 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <Plus size={20} />
        Add
      </button>
    </motion.form>
  );
};

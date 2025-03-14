
import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ( {onAdd}:AddTodoProps) => {
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
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-todo-purple/20 focus:border-todo-purple transition-all duration-200"
      />
      <button
        type="submit"
        className="px-4 py-3 rounded-xl bg-gradient-to-r from-todo-rose to-todo-purple text-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
      >
        <Plus size={20} />
        Add
      </button>
    </motion.form>
  );
};

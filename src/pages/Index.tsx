
import { useState } from "react";
import { AddTodo } from "@/components/AddTodo";
import { TodoItem } from "@/components/TodoItem";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { toast } = useToast();

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    toast({
      title: "Task added",
      description: "Your new task has been added successfully.",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast({
      title: "Task deleted",
      description: "Your task has been deleted successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#9b87f5]/20 to-[#6E59A5]/20 blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#7E69AB]/20 to-[#D6BCFA]/20 blur-[80px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#6E59A5]/10 to-[#9b87f5]/10 blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container max-w-2xl py-12 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent mb-2">
            Tasks
          </h1>
          <p className="text-[#D6BCFA]/70">Stay organized, focused, and productive.</p>
        </motion.div>

        <AddTodo onAdd={addTodo} />

        <AnimatePresence mode="popLayout">
          {todos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-[#D6BCFA]/50"
            >
              No tasks yet. Add one to get started!
            </motion.div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;

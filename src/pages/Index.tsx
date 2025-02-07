
import { useState, useEffect } from "react";
import { AddTodo } from "@/components/AddTodo";
import { TodoItem } from "@/components/TodoItem";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTodos(data || []);
    } catch (error) {
      console.error('Error fetching todos:', error);
      toast({
        title: "Error",
        description: "Failed to fetch todos.",
      });
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text: string) => {
    try {
      const newTodo = {
        text,
        completed: false,
      };

      const { data, error } = await supabase
        .from('todos')
        .insert([newTodo])
        .select()
        .single();

      if (error) throw error;

      setTodos([data, ...todos]);
      toast({
        title: "Task added",
        description: "Your new task has been added successfully.",
      });
    } catch (error) {
      console.error('Error adding todo:', error);
      toast({
        title: "Error",
        description: "Failed to add todo.",
      });
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;

      const { error } = await supabase
        .from('todos')
        .update({ completed: !todo.completed })
        .eq('id', id);

      if (error) throw error;

      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error('Error toggling todo:', error);
      toast({
        title: "Error",
        description: "Failed to update todo.",
      });
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTodos(todos.filter((todo) => todo.id !== id));
      toast({
        title: "Task deleted",
        description: "Your task has been deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting todo:', error);
      toast({
        title: "Error",
        description: "Failed to delete todo.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-todo-light">
      <div className="container max-w-2xl py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-todo-rose to-todo-purple bg-clip-text text-transparent mb-2">
            Tasks
          </h1>
          <p className="text-gray-600">Stay organized, focused, and productive.</p>
        </motion.div>

        <AddTodo onAdd={addTodo} />

        <AnimatePresence mode="popLayout">
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              Loading tasks...
            </motion.div>
          ) : todos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
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

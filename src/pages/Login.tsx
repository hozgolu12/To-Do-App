
import { useState } from "react";
import { useAuth } from "@/contexts/useAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Chrome } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithGoogle} = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      navigate("/");
      toast({
        title: "Success",
        description: "Successfully logged in with Google!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log in with Google. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#e387f5] via-[#D6BCFA] to-[#F1F0FB]">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)",
            filter: "blur(80px)"
          }}
        />
      </div>

       {/* Floating particles */}
       <motion.div
        animate={{
          y: [-20, 20],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-20 left-20 w-4 h-4 rounded-full bg-white/30"
      />
      <motion.div
        animate={{
          y: [20, -20],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-40 right-32 w-6 h-6 rounded-full bg-white/30"
      />

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent"
        >
          Welcome!
        </motion.h1>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-3 px-4 bg-todo-purple text-white rounded-xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors disabled:opacity-50"
          >
            <Chrome className="w-5 h-5" />
            <span>Continue with Google</span>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-center text-gray-600 mt-8"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;

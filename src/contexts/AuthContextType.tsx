import { User } from 'firebase/auth';
import { createContext } from 'react';

 interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

 const AuthContext = createContext<AuthContextType | null>(null);

 export default AuthContext;
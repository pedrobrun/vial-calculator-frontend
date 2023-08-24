import React, { createContext, useContext, useEffect, useState } from 'react';
import useAuthOperations, { AuthState } from '@/hooks/useAuthOperations';

interface AuthContextProps {
  jwt: string | null;
  signUp: (name: string, password: string, code: string) => Promise<void>;
  signUpState: AuthState<Record<string, any>>;
  signIn: (name: string, password: string) => Promise<void>;
  signInState: AuthState<{ accessToken: string; username: string }>;
  username: string | null;
}

export const AuthContext = createContext<AuthContextProps>({
  jwt: null,
  signUp: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  signUpState: { data: null, loading: false, error: null },
  signInState: { data: null, loading: false, error: null },
  username: null,
});

export const useAuth = (): AuthContextProps => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const { signIn, signInState, signUp, signUpState } = useAuthOperations();

  useEffect(() => {
    const storedJwt = localStorage.getItem('jwt');
    const storedName = localStorage.getItem('username');

    if (storedJwt && storedName) {
      setJwt(storedJwt);
      setUsername(storedName);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ jwt, signUp, signIn, username, signInState, signUpState }}>
      {children}
    </AuthContext.Provider>
  );
};

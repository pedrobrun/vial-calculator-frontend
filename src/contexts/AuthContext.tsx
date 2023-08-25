import React, { createContext, useContext, useEffect, useState } from "react";
import { login } from "@/services/auth/login";
import { registerUser } from "@/services/user/register";

export interface AuthState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface AuthContextProps {
  jwt: string | null;
  signUp: (name: string, password: string) => Promise<Record<string, any>>;
  signUpState: AuthState<Record<string, any>>;
  signIn: (name: string, password: string) => Promise<void>;
  signInState: AuthState<{ accessToken: string; username: string }>;
  username: string | null;
  resetSignUpState: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  jwt: null,
  signUp: () => Promise.resolve({}),
  signIn: () => Promise.resolve(),
  signUpState: { data: null, loading: false, error: null },
  signInState: { data: null, loading: false, error: null },
  username: null,
  resetSignUpState: () => {},
  loading: false,
});

export const useAuth = (): AuthContextProps => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [signInState, setSignInState] = useState<
    AuthState<{ accessToken: string; username: string }>
  >({
    data: null,
    loading: false,
    error: null,
  });

  const [signUpState, setSignUpState] = useState<
    AuthState<Record<string, any>>
  >({
    data: null,
    loading: false,
    error: null,
  });

  const resetSignUpState = () => {
    setSignUpState({
      data: null,
      loading: false,
      error: null,
    });
  };

  const signIn = async (username: string, password: string) => {
    setSignInState({ data: null, loading: true, error: null });
    try {
      const { accessToken, username: authenticatedUsername } = await login(
        username,
        password,
      );
      setSignInState({
        data: { accessToken, username: authenticatedUsername },
        loading: false,
        error: null,
      });
      localStorage.setItem("jwt", accessToken);
      setJwt(accessToken);
      localStorage.setItem("username", authenticatedUsername);
      setUsername(authenticatedUsername);
    } catch (e) {
      setSignInState({
        data: null,
        loading: false,
        error: (e as any).response?.data?.message || "An error occurred",
      });
    }
  };

  const signUp = async (username: string, password: string) => {
    setSignUpState({ data: null, loading: true, error: null });
    try {
      const data = await registerUser(username, password);
      setSignUpState({ data, loading: false, error: null });
      return data;
    } catch (e) {
      setSignUpState({
        data: null,
        loading: false,
        error: (e as any).response?.data?.message || "An error occurred",
      });
    }
  };

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    const storedName = localStorage.getItem("username");

    if (storedJwt && storedName) {
      setJwt(storedJwt);
      setUsername(storedName);
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        jwt,
        signUp,
        signIn,
        username,
        signInState,
        signUpState,
        resetSignUpState,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

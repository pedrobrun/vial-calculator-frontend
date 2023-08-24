import { login } from '@/services/auth/login';
import { registerUser } from '@/services/user/register';
import { useState } from 'react';

export interface AuthState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useAuthOperations = () => {
  const [signInState, setSignInState] = useState<AuthState<{ accessToken: string; username: string }>>({
    data: null,
    loading: false,
    error: null,
  });

  const [signUpState, setSignUpState] = useState<AuthState<Record<string, any>>>({
    data: null,
    loading: false,
    error: null,
  });

  const signIn = async (username: string, password: string) => {
    setSignInState({ data: null, loading: true, error: null });
    try {
      const data = await login(username, password)
      setSignInState({ data, loading: false, error: null });
    } catch (e) {
      setSignInState({ data: null, loading: false, error: (e as any).response?.data?.message || 'An error occurred' });;
    }
  };

  const signUp = async (username: string, password: string) => {
    setSignUpState({ data: null, loading: true, error: null });
    try {
      const data = await registerUser(username, password)
      setSignUpState({ data, loading: false, error: null });
    } catch (e) {
      setSignUpState({ data: null, loading: false, error: (e as any).response?.data?.message || 'An error occurred' });;
    }
  };

  return {
    signIn,
    signInState,
    signUp,
    signUpState,
  };
};

export default useAuthOperations;

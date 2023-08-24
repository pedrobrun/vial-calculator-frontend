import { useAuth } from '@/contexts/AuthContext';
import React, { FormEvent, useEffect, useState } from 'react';

const SignInForm = ({ close }: { close: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInState, username: authenticatedUsername } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signIn(username, password);
  };

  useEffect(() => {
    if (signInState.data) {
      close()
    }
  }, [signInState.data, close])


  const areFieldsEmpty = !username || !password

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm font-medium text-gray-600">Username</label>
        <input onChange={(e) => setUsername(e.target.value)} id="username" type="text" className="p-2 border rounded-sm focus:outline-black" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" className="p-2 border rounded-sm focus:outline-black" />
      </div>
      <div>
        <button type='submit' onClick={handleSubmit} disabled={signInState.loading || areFieldsEmpty} className="w-full bg-black text-white p-2 rounded-sm hover:bg-[#6d6d6d]">
          Sign In
        </button>
      </div>
      <div className='flex flex-col gap-1'>
        {areFieldsEmpty && <p className='opacity-75 text-sm'>Type in your username and password.</p>}
        {signInState.loading && <p>Loading...</p>}
        {signInState.error && !signInState.loading && <p className="text-red-500 text-sm">{signInState.error}</p>}
      </div>
    </form>
  );
};

export default SignInForm;

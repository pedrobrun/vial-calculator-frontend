import { useAuth } from "@/contexts/AuthContext";
import clsx from "clsx";
import React, { FormEvent, useState } from "react";

const SignUpForm = ({ close }: { close: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, signUpState, resetSignUpState } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signUp(username, password);
  };

  const areFieldsEmpty = !username || !password;

  return (
    <>
      {signUpState.data && (
        <div className="w-full h-full flex flex-col gap-4 mt-3">
          <p>You&apos;re registered! 🎊</p>
          <button
            onClick={() => {
              resetSignUpState();
              close();
            }}
            className="w-full bg-black text-white p-2 rounded-sm hover:bg-[#6d6d6d]"
          >
            Close
          </button>
        </div>
      )}
      <form
        className={clsx(signUpState.data && "hidden", "flex flex-col gap-4")}
      >
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            className="p-2 border rounded-sm focus:outline-black"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            className="p-2 border rounded-sm focus:outline-black"
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-black text-white p-2 rounded-sm hover:bg-[#6d6d6d]"
          >
            Sign Up
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {areFieldsEmpty && (
            <p className="opacity-75 text-sm">
              Type in your username and password.
            </p>
          )}
          {signUpState.loading && <p>Loading...</p>}
          {signUpState.error && !signUpState.loading && (
            <p className="text-red-500 text-sm">{signUpState.error}</p>
          )}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;

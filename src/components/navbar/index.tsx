import React, { useState } from "react";
import Modal from "../modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useAuth } from "@/contexts/AuthContext";
import Loader from "../loader";

const Navbar = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const { username, jwt, loading, logout } = useAuth();

  return (
    <div className="w-full items-center justify-center relative top-0 z-40 bg-black flex flex-col pt-12">
      {loading ? (
        <Loader />
      ) : username && jwt ? (
        <div className="flex items-center gap-4">
          <p>
            Hi, <span className="text-lg font-bold uppercase">{username}</span>!
          </p>
          <button onClick={logout} className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
            <div className="absolute w-16 left-1/2 -translate-x-1/2 top-full mt-1 z-10 invisible group-hover:visible">
              <div className="bg-gray-800 text-white p-1 rounded text-xs">
                Log Out
              </div>
              <div className="w-0 h-0 border-4 border-transparent border-b-[4px] border-gray-700 absolute left-1/2 -translate-x-1/2 bottom-full"></div>
            </div>
          </button>
        </div>
      ) : (
        <div className="text-bold gap-10 flex items-center">
          <button
            onClick={() => setSignInModalOpen(true)}
            className="border py-2 px-5 rounded-sm hover:bg-[#6d6d6d] active:hover:bg-[#6d6d6d]"
          >
            Sign In
          </button>
          <button
            onClick={() => setSignUpModalOpen(true)}
            className="border py-2 px-5 rounded-sm hover:bg-[#6d6d6d] active:hover:bg-[#6d6d6d]"
          >
            Sign Up
          </button>

          <Modal
            close={() => setSignUpModalOpen(false)}
            title="Sign Up"
            isOpen={signUpModalOpen}
          >
            <SignUpForm close={() => setSignUpModalOpen(false)} />
          </Modal>

          <Modal
            close={() => setSignInModalOpen(false)}
            title="Sign In"
            isOpen={signInModalOpen}
          >
            <SignInForm close={() => setSignInModalOpen(false)} />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Navbar;

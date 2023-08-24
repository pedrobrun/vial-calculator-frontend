import React, { useState } from 'react'
import Modal from '../modal'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { useAuth } from '@/contexts/AuthContext'

const Navbar = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const { username, jwt, loading } = useAuth()

  return (
    <div className="w-full items-center justify-center flex flex-col pt-12">
      {loading ? (
        <div
          className="flex h-8 w-8 text-white animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
        </div>
      ) : username && jwt ? (
        <div>Hi, <span className='text-lg font-bold uppercase'>{username}</span>!</div>
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
  )
}

export default Navbar

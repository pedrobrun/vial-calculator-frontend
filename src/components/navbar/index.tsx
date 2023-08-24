import React, { useState } from 'react'
import Modal from '../modal'

const Navbar = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  return (
    <div className="w-full items-center justify-center flex flex-col pt-12">
      <div className='text-bold gap-10 flex'>
        <button onClick={() => setSignInModalOpen(true)} className='border py-2 px-5 rounded-sm hover:bg-[#6d6d6d] active:hover:bg-[#6d6d6d]'>Sign In</button>
        <button onClick={() => setSignUpModalOpen(true)} className='border py-2 px-5 rounded-sm hover:bg-[#6d6d6d] active:hover:bg-[#6d6d6d]'>Sign Up</button>

        <Modal close={() => setSignUpModalOpen(false)} title='Sign Up' isOpen={signUpModalOpen}>
          <div>
            this is the signup modal
          </div>
        </Modal>

        <Modal close={() => setSignInModalOpen(false)} title='Sign In' isOpen={signInModalOpen}>
          <div>
            this is the signin modal
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Navbar

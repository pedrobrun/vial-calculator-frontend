import React, { Fragment, ReactElement } from "react";

import { Dialog, Transition } from "@headlessui/react";

const Modal = ({
  close,
  isOpen,
  title,
  children,
}: {
  close: () => void;
  isOpen: boolean;
  title: string;
  children: ReactElement;
}) => {
  return (
    <>
      {isOpen ? (
        <div className="h-[101vh] w-[101vh] fixed opacity-40 top-0 left-0 z-[80]" />
      ) : null}
      <Transition appear show={Boolean(isOpen)} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-bg bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 my-auto">
            <div className="flex flex-col min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full max-w-[345px] bg-white transform overflow-hidden rounded-md p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-[24px] leading-[36px] font-bold">
                    {title}
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

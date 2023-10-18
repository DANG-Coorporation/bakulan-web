"use client";

import { delay } from "@/utils/delay";
import { getLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function ProfileMain() {
  const token = getLocalStorage("accessToken");
  const user = JSON.parse(getLocalStorage("user")!);
  const route = useRouter();
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
    if (!token && initialRender) {
      toast("Please login to continue", {
        icon: "👏",
      });
      delay(300, () => {
        route.push("/login");
      });
    }
  }, [token, initialRender]);

  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <button className='btn' onClick={() => modalRef.current?.showModal()}>
        open modal
      </button>
      <dialog id='my_modal_3' className='modal' ref={modalRef}>
        <div className='modal-box max-w-full w-[95vw] lg:w-[60vw] min-w-[360px] h-screen'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              className='btn btn-sm btn-circle btn-ghost absolute left-2 top-2'
              onClick={() => modalRef.current?.close()}
            >
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg my-[30px] text-center '>Profile</h3>
          {/* <p className='py-4'>Press ESC key or click on ✕ button to close</p> */}
          <div className='flex sm:flex-row flex-col justify-center  h-[200px] p-[5px]'>
            <img
              src='http://nawaytes.cloud:4040/api/document/1'
              className='object-cover w-[200px] h-[200px] mx-auto rounded-full my-[30px] cursor-pointer'
              alt='Profile Image'
            />
            <div className='flex flex-col w-fit bg-gray-100 rounded-lg mx-[5px] p-[20px] h-fit'>
              <div className='grid sm:grid-cols-5 grid-cols-1 text-gray-800'>
                <div className='col-span-2'>
                  <p>Username</p>
                </div>
                <div className='col-span-3 mb-[30px]'>
                  <p>{user.username}</p>
                </div>
                <div className='col-span-2'>
                  <p>Email</p>
                </div>
                <div className='col-span-3 mb-[30px]'>
                  <p>{user.email}</p>
                </div>

                <div className='col-span-2'>
                  <p>password</p>
                </div>
                <div className='col-span-3 mb-[30px]'>
                  <input
                    type='password'
                    className='border border-gray-300 rounded-lg p-2'
                  />
                </div>

                <div className='col-span-2'>
                  <p>confirm password</p>
                </div>
                <div className='col-span-3 mb-[30px]'>
                  <input
                    type='password'
                    className='border border-gray-300 rounded-lg p-2'
                  />
                </div>
                <div className='col-span-5'>
                  <button className='btn btn-sm  btn-ghost w-full hover:bg-orange-700 hover:text-gray-100'>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

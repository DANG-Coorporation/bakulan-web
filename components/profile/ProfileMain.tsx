"use client";

import { delay } from "@/utils/delay";
import { getLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getProfile } from "@/redux/profile/getProfileSlice";
import { updateProfilePicture } from "@/redux/profile/updatePictureSlice";

export default function ProfileMain() {
  const dispatch = useDispatch<AppDispatch>();
  const [photoUrl, setPhotoUrl] = useState(
    "https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-6-1/128/profile-image-male-question-512.png"
  );
  const profileState = useSelector((state: RootState) => state.profileState);
  console.log("pictureId", profileState.data.data?.pictureId);
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
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  useEffect(() => {
    setPhotoUrl(
      `http://nawaytes.cloud:4040/api/document/${profileState.data.data?.pictureId}`
    );
  }, [profileState.data]);

  const profileSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: any) => {
    toast.promise(
      new Promise((resolve, reject) => {
        // dispatch(
        //   sendResetPassword({
        //     data: values,
        //     token: params.token as string,
        //   })
        // );
        resolve("Success");
      }),
      {
        loading: "Loading...",
        success: "Password changed successfully",
        error: "Something went wrong",
      }
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: profileSchema,
  });

  const handleUpdateProfile = async (e: any) => {
    toast.promise(
      new Promise((resolve, reject) => {
        dispatch(updateProfilePicture(e.target.files![0]))
          .unwrap()
          .then((res) => {
            dispatch(getProfile());
            resolve("Success");
          })
          .catch((err) => {
            reject("Error");
          });
      }),
      {
        loading: "Loading...",
        success: "Profile updated successfully",
        error: "Something went wrong",
      }
    );
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <button className='btn' onClick={() => modalRef.current?.showModal()}>
        open modal
      </button>
      <dialog id='my_modal_3' className='modal' ref={modalRef}>
        <div className='modal-box max-w-full w-[95vw] lg:w-[60vw] min-w-[360px] h-fit'>
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
          <div className='flex sm:flex-row flex-col justify-center h-fit p-[5px]'>
            <img
              src={photoUrl}
              className='object-cover w-[200px] h-[200px] mx-auto rounded-full my-[30px] cursor-pointer hover:border-2 border-orange-500'
              alt='Profile Image'
              onClick={() => fileRef.current?.click()}
            />
            <input
              type='file'
              className='hidden'
              ref={fileRef}
              onChange={(e) => {
                handleUpdateProfile(e);
              }}
              onAbort={(e) => {
                e.currentTarget.value = "";
              }}
              onClick={(e) => {
                e.currentTarget.value = "";
              }}
            />
            <div className='flex flex-col w-fit bg-gray-100 rounded-lg mx-[5px] p-[20px] h-fit'>
              <form onSubmit={formik.handleSubmit}>
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

                  {/* <div className='col-span-2'>
                    <p>password</p>
                  </div>
                  <div className='col-span-3 mb-[30px]'>
                    <input
                      name='password'
                      type='password'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='border border-gray-300 rounded-lg p-2'
                    />
                    <p className='text-red-500 text-xs '>
                      {formik.touched.password && formik.errors.password}
                    </p>
                  </div>

                  <div className='col-span-2'>
                    <p>confirm password</p>
                  </div>
                  <div className='col-span-3 mb-[30px]'>
                    <input
                      name='confirmPassword'
                      type='password'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className='border border-gray-300 rounded-lg p-2'
                    />
                    <p className='text-red-500 text-xs '>
                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword}
                    </p>
                  </div>
                  <div className='col-span-5'>
                    <button className='btn btn-sm  btn-ghost w-full hover:bg-orange-700 hover:text-gray-100 border-1 border-orange-500'>
                      Save
                    </button> 
                   </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

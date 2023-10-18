"use client";

import { IRegister } from "@/common/interface/registerApi";
import { registerOwnerApi } from "@/redux/auth/register/registerSlicer";
import { AppDispatch } from "@/redux/store";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import "./style.css";
export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const toastId = useRef<any>(null);

  const registerSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string()
      .email("must be a valid email")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
        "must be a valid  email"
      ),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: IRegister) => {
    let errorMessages = "";
    toast.promise(
      new Promise((resolve, reject) => {
        dispatch(registerOwnerApi(values))
          .unwrap()
          .then((data) => {
            router.push("/login");
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }),
      {
        loading: "Loading...",
        success: "Register success.",
        error: `Register failed. ${errorMessages}.`,
      }
    );
    // const router = useRouter();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: registerSchema,
  });

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='background flex flex-col justify-center items-center h-screen'>
        <div className='bg-slate-300  rounded-lg shadow-lg p-10 w-screen sm:w-fit '>
          <h1 className='text-2xl font-bold mb-5 '>Register</h1>
          <form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>
            <input
              name='username'
              type='text'
              placeholder='Username'
              className='border border-gray-300 rounded-lg p-2'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <p className='text-red-500'>
              {formik.touched.username && formik.errors.username}
            </p>
            <input
              name='email'
              type='text'
              placeholder='Email'
              className='border border-gray-300 rounded-lg p-2'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <p className='text-red-500'>
              {formik.touched.email && formik.errors.email}
            </p>
            <input
              name='password'
              type='password'
              placeholder='Password'
              className='border border-gray-300 rounded-lg p-2'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <p className='text-red-500'>
              {formik.touched.password && formik.errors.password}
            </p>
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              className='border border-gray-300 rounded-lg p-2'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <p className='text-red-500'>
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </p>
            <button
              type='submit'
              className='bg-orange-500 text-white rounded-lg p-2'
            >
              Register
            </button>
          </form>
          <p
            className='text-blue-500 cursor-pointer mt-[20px]'
            onClick={() => {
              router.push("/login");
            }}
          >
            Already have an account? Login
          </p>
        </div>
      </div>
    </>
  );
}

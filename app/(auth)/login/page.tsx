"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { loginAppApi } from "@/redux/auth/login/loginSlice";
import { setLocalStorage } from "@/utils/localStorage";
import { delay } from "@/utils/delay";
export default function LoginPage() {
  const login = useSelector((state: RootState) => state.loginState);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    toast.promise(
      new Promise((resolve, reject) => {
        dispatch(loginAppApi(values))
          .unwrap()
          .then((data) => {
            console.log(data);
            setLocalStorage("user", JSON.stringify(data?.data?.user));
            setLocalStorage(
              "accessToken",
              JSON.stringify(data?.data?.accessToken)
            );
            setLocalStorage(
              "refreshToken",
              JSON.stringify(data?.data?.refreshToken)
            );
            delay(1000, () => {
              router.push("/");
            });

            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }),
      {
        loading: "Loading...",
        success: "Success, please wait a seconds.",
        error: `Login Failed, please make sure your username and password is correct.`,
      }
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  });

  useEffect(() => {
    if (formik.errors) {
      console.log(formik.errors);
    }
  }, [formik.errors]);

  return (
    <>
      {" "}
      <Toaster position='top-center' reverseOrder={false} />
      <div className='background flex flex-col justify-center items-center h-screen'>
        <div className='bg-slate-300  rounded-lg shadow-lg p-10 w-screen sm:w-[500px] '>
          <h1 className='text-2xl font-bold mb-5 '>Login</h1>
          <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
            <input
              name='username'
              type='text'
              placeholder='Username'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={`border border-gray-300 rounded-lg p-2 ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : ""
              } 
            focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent
            `}
            />
            <p className='text-red-500'>
              {formik.touched.username && formik.errors.username}
            </p>
            <input
              name='password'
              type='password'
              placeholder='Password'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={`border border-gray-300 rounded-lg p-2 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              } 
              focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent pr-10
              `}
            />
            <p className='text-red-500'>
              {formik.touched.password && formik.errors.password}
            </p>
            <button
              type='submit'
              className='bg-orange-500 text-white rounded-lg p-2'
            >
              Login
            </button>
          </form>
          <p
            className='text-blue-500 cursor-pointer mt-[20px]'
            onClick={() => {
              router.push("/register");
            }}
          >
            Dont have account? register
          </p>
          <p
            className='text-blue-500 cursor-pointer mt-[20px]'
            onClick={() => {
              router.push("/forgot-password");
            }}
          >
            Forgot password?
          </p>
        </div>
      </div>
    </>
  );
}

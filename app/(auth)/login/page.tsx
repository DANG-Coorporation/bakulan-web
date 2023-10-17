"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useEffect } from "react";
import "./style.css";
export default function LoginPage() {
  const loginSchema = Yup.object().shape({
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
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
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
    <div className='background flex flex-col justify-center items-center h-screen'>
      <div className='bg-slate-300  rounded-lg shadow-lg p-10 w-screen sm:w-[500px] '>
        <h1 className='text-2xl font-bold mb-5 '>Login</h1>
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
          <input
            name='email'
            type='text'
            placeholder='Email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`border border-gray-300 rounded-lg p-2 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : ""
            } 
            focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent
            `}
          />
          <p className='text-red-500'>
            {formik.touched.email && formik.errors.email}
          </p>
          <input
            name='password'
            type='password'
            placeholder='Password'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`border border-gray-300 rounded-lg p-2 ${
              formik.touched.email && formik.errors.email
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
      </div>
    </div>
  );
}

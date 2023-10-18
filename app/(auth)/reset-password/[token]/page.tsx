"use client";

import { apiStatus } from "@/common/constant/apiStatus";
import { checkTokenResetPassword } from "@/redux/auth/checkTokenResetPassword/checkTokenResetPasswordSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { delay } from "@/utils/delay";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { sendResetPassword } from "@/redux/auth/sendResetPassword/sendResetPasswordSlice";

function ResetPassword() {
  const route = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const checkResetPasswordState = useSelector(
    (state: RootState) => state.checkResetPasswordState
  );
  const params = useParams();

  useEffect(() => {
    const token = params.token as string;
    if (token) {
      dispatch(checkTokenResetPassword(token));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(checkResetPasswordState.status);
    if (checkResetPasswordState.status === apiStatus.failed) {
      toast.error("Token is invalid");
      delay(1000, () => {
        route.push("/");
      });
    }
  }, [checkResetPasswordState.status]);

  const resetPasswordSchema = Yup.object().shape({
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
        dispatch(
          sendResetPassword({
            data: values,
            token: params.token as string,
          })
        )
          .unwrap()
          .then((data) => {
            delay(1000, () => {
              route.push("/login");
            });

            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }),
      {
        loading: "Loading...",
        success: "Success, please login.",
        error: `Failed, Please try again later.`,
      }
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: resetPasswordSchema,
  });

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col justify-center items-center border-2 h-fit p-5 border-gray-300 rounded-lg shadow-lg w-screen sm:w-[500px]'>
          <h1 className='text-3xl font-bold text-gray-900 pb-5'>
            Reset Password
          </h1>
          <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
            <input
              name='password'
              type='password'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder='Password'
              className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent pr-10'
            />
            <p className='text-red-500 text-xs mt-[-15px]'>
              {formik.touched.password && formik.errors.password}
            </p>
            <input
              name='confirmPassword'
              type='password'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder='Confirm Password'
              className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent pr-10'
            />
            <p className='text-red-500 text-xs mt-[-15px]'>
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </p>
            <button
              type='submit'
              className='bg-orange-500 text-white rounded-lg p-2'
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;

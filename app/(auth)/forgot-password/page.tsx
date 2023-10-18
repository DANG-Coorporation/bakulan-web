"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import toast, { Toaster } from "react-hot-toast";
import { delay } from "@/utils/delay";
import { forgotPasswordApi } from "@/redux/auth/forgotPassword/forgetPasswordSlice";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("must be a valid email")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
        "must be a valid  email"
      ),
  });

  const initialValues = {
    email: "",
  };

  const onSubmit = (values: any) => {
    toast.promise(
      new Promise((resolve, reject) => {
        dispatch(forgotPasswordApi(values.email))
          .unwrap()
          .then((data) => {
            delay(1000, () => {
              router.push("/login");
            });

            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }),
      {
        loading: "Loading...",
        success: "Success, please check your email.",
        error: `Failed, Please try again later.`,
      }
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: forgotPasswordSchema,
  });

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex flex-col justify-center items-center h-screen'>
        {/* <h1>Forgot Password</h1> */}
        <div className='bg-slate-300  rounded-lg shadow-lg p-10 w-screen sm:w-[500px]'>
          <p>
            Enter your email address and we will send you a link to reset your
            password.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <input
              name='email'
              type='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder='Email'
              className='border border-gray-300 rounded-lg p-2 w-full mt-5'
            />
            <p className='text-red-500 text-sm ml-2'>
              {formik.touched.email && formik.errors.email}
            </p>
            <button
              type='submit'
              className='btn bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 w-full my-5'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

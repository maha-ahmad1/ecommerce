import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  Email: string;
  Password: string;
};
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = ({ event, data }: any) => {
    event.preventDefault();
    console.log(data);
  };
  console.log(watch("Password"))
  return (
    <div className="flex flex-col justify-center pt-12 pb-20 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-12 px-4 shadow-2xl sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-3xl font-bold mb-8">Login</p>
            <div>
              <Input
                autoFocus={true}
                id="email-input"
                label="Email"
                placeholder="Enter Email"
                inputSize="small"
                {...register("Email", { required: true })}
              />
              {errors.Email && <span>This field is required</span>}
            </div>

            <div>
              <div className="mt-1">
                <Input
                  required
                  autoFocus={true}
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                  inputSize="small"
                />
                {errors.Password && <span>This field is required</span>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-[#687188]"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#687188] ">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md text-white bg-[#ff324d] hover:bg-[#ff324de7] focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6">
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div> */}

            {/* <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Image
                    height={100}
                    width={100}
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt="Facebook"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Image
                    height={100}
                    width={100}
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Image
                    height={100}
                    width={100}
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt="Google"
                  />
                </a>
              </div>
            </div> */}
            <div className="mt-6 flex justify-center ">
              <h2 className="text-md font-sans text-gray-500 ">
              {`Don't Have an Account?`} 
                <Link href="#" className="hover:text-[#ff324d] text-black">
                  Sign up now
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

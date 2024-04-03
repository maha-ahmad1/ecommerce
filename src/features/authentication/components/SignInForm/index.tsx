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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.Email,
          password: data.Password
        })
      });
      
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // Handle successful login, e.g., redirect user, set auth token, etc.
      } else {
        // Handle error response, e.g., display error message
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during login:', error);
    }
  };
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
                  id="password-input"
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                  inputSize="small"
                  {...register("Password")}
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

export default SignInForm

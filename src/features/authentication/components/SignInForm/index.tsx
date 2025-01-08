import React from "react";
import Link from "next/link";
import { Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin } from "features/authentication/hooks";
import { useContext } from "react";
import AuthContext from "features/authentication/context/AuthContext";
import { useRouter } from "next/router";

type Inputs = {
  username: string;
  password: string;
};

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { login } = useLogin();
  const authCtx = useContext(AuthContext);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const UserData = {
        username: data.username,
        password: data.password,
      };

      const response = await fetch("https://fakeapidata.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserData),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }else{
        router.push("/");
      }
   
      const responseData = await response.json();
      // authCtx.login(responseData.token);
      console.log(responseData);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center pt-12 pb-20 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-12 px-4 sm:shadow-2xl shadow-none sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-3xl font-bold mb-8">Login</p>
            <div>
              <Input
                autoFocus={true}
                id="username-input"
                label="username"
                placeholder="Enter username"
                inputSize="small"
                {...register("username", { required: true })}
              />
            </div>

            <div>
              <div className="mt-1">
                <Input
                  id="password-input"
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                  inputSize="small"
                  {...register("password", { required: true })}
                />
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
                {`Don't Have an Account? `}
                <Link
                  href="/sign-up"
                  className="hover:text-[#ff324d] text-black"
                >
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

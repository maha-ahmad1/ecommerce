import React from "react";
import Link from "next/link";
import { Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWR, { SWRResponse } from "swr";

type Inputs = {
  Email: string;
  Password: string;
  Name: string;
};

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  // Define the onSubmit function
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Extract the name into firstname and lastname
    // const [firstname, lastname] = data.Name.split(' ');

    // Define the user data according to the API requirements
    const userData = {
      email: "maha",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '1-570-236-7033', // Placeholder phone number
    };
    console.log('Request data being sent to the API:', userData);

    try {
      // Make the API request
      const response = await fetch('https://fakeapidata.com/secure/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR', // Replace 'token' with your actual token
        },
        body: JSON.stringify(userData),
      });
    
      // Parse the JSON response
      const jsonResponse = await response.json();
    
      // Log the response received from the API
      console.log('Response received from the API:', jsonResponse);
    
      // Check if the response is successful
      if (response.ok) {
        // Access the email from the API response
        const userEmail = jsonResponse.id;
        console.log('User email:', userEmail);
        console.log('User created successfully:', jsonResponse);
        // Add any additional logic here, such as displaying a success message or redirecting the user
      } else {
        // Handle API errors
        console.error('Error creating user:', jsonResponse);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle any network errors or unexpected issues
    }
  };

  return (
    <div className="flex flex-col justify-center pt-12 pb-20 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-12 px-4 shadow-2xl sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-3xl font-bold mb-8">Create An Account</p>
            <div>
              <Input
                autoFocus
                id="Name-input"
                label="Name"
                placeholder="Enter Name"
                inputSize="small"
                {...register("Name")}
              />
            </div>
            <div>
              <Input
                id="email-input"
                label="Email"
                placeholder="Enter Email"
                inputSize="small"
                {...register("Email")}
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
                  {...register("Password")}
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
                  I agree to terms & Policy.
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-[#ff324d] hover:bg-[#ff324de7] focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="mt-6 flex justify-center">
              <h2 className="text-md font-sans text-gray-500">
                {`Already have an account? `}
                <Link
                  href="/sign-in"
                  className="hover:text-[#ff324d] text-black"
                >
                  Log in
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

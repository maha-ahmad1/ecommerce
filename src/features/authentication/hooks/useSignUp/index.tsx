import useSWR, { SWRResponse } from "swr";
import { useRouter } from "next/router";

export const useSignUp = () => {
  const router = useRouter();

  const signup = async (
    email: string,
    password: string,
    username: string
  ): Promise<SWRResponse<any, any>> => {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    });

    if (!response.ok) {
      throw new Error("sign up failed");
    }else{
      router.push("/");

    }
    console.log(response);
    return response.json();
  };

  return { signup };
};

export default useSignUp;
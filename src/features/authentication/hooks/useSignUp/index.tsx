import useSWR, { SWRResponse } from "swr";

export const useSignUp = () => {
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
    }
    console.log(response);
    return response.json();
  };

  return { signup };
};

export default useSignUp;

import useSWR, { SWRResponse } from "swr";

export const useLogin = () => {
  const login = async (UserData: { email: string; password: string }): Promise<SWRResponse<any, any>> => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserData),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  };

  return { login };
};

export default useLogin;

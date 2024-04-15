import React from "react";
import type { NextPageWithLayout } from "types";
// import { ActiveLink } from "components";
import SignUpForm from "features/authentication/components/SignUpForm";
const SignUp: NextPageWithLayout = () => {
  return (
    <>
    <SignUpForm />
    </>
  );
};

SignUp.mainLayoutProps = {
  subtitle: 'Sign Up',
  pages: 'Home',
  pageTitle: "Sign Up",
};
  
export default SignUp;

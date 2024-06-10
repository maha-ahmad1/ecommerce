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
  subtitle: 'Register',
  pages: 'Home',
  pageTitle: "Register",
};
  
export default SignUp;

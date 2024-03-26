import React from "react";
import SignInForm from "features/authentication/components/SignInForm";
import type { NextPageWithLayout } from "types";
import { ActiveLink } from "components";
const SignIn: NextPageWithLayout = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

SignIn.mainLayoutProps = {
  subtitle: 'Login',
  pages: 'Home',
  pageTitle: "Login",
};
  
export default SignIn;

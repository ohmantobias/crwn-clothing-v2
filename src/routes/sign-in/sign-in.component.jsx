import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>sign in with google poput</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

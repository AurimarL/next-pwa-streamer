"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import {
  EmailInput,
  PasswordInput,
  SignWithCredetialsButton,
  SignWithGoogleButton,
} from "ui/Forms";

import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "redux/slices/signInFormSlice";
import { RootState } from "../../../../redux/stores/store";
/*
useEffect(() => {
  console.log(userEmail);
}, [userEmail]);
*/

export default function SignInForm() {
  const userEmail = useSelector((state: RootState) => state.signInForm.email);
  const userpassword = useSelector(
    (state: RootState) => state.signInForm.password
  );
  const dispatch = useDispatch();
  const [showCredetialsError, setshowCredetialsError] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    console.log(userEmail);
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userEmail,
      password: userpassword,
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      setshowCredetialsError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <EmailInput setEmail={(e: string) => dispatch(setEmail(e))} />
        <PasswordInput setPassword={(e: string) => dispatch(setPassword(e))} />
        {showCredetialsError && (
          <>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-red-700 before:mt-0.5 after:flex-1 after:border-t after:border-red-700 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0 text-red-600">
                CREDETIALS INCORRECT
              </p>
            </div>
          </>
        )}

        <SignWithCredetialsButton />
      </form>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>
      <SignWithGoogleButton />
    </>
  );
}

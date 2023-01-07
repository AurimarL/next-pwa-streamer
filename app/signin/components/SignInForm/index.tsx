"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import {
  EmailInput,
  PasswordInput,
  SignWithCredetialsButton,
  SignWithGoogleButton,
} from "ui/Forms";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCredetialsError, setshowCredetialsError] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
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
        <EmailInput setEmail={setEmail} />
        <PasswordInput setPassword={setPassword} />
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

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>
        <SignWithGoogleButton />
      </form>
    </>
  );
}

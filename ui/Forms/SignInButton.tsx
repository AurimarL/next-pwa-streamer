import { signIn } from "next-auth/react";

export const SignWithCredetialsButton = () => {
  return (
    <>
      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Sign in
      </button>
    </>
  );
};

export const SignWithGoogleButton = () => {
  return (
    <>
      <button
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        Continue with Google
      </button>
    </>
  );
};

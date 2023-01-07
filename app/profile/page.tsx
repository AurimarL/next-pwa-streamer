"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

/* eslint-disable react-hooks/rules-of-hooks */
export default function page() {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;

  const router = useRouter();
  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>

        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    );
  }
  router.back();
}

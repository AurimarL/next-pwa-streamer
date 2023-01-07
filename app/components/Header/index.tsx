"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const router = usePathname();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          Streaming
        </Link>
      </div>
      <div className="navbar-center hidden md:block">
        <input
          className=" normal-case text-xl m-2 p-2 rounded-md h-8"
          placeholder="Search..."
        />
      </div>

      <div className="navbar-end">
        {session ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-circle avatar">
                {session?.user?.image && (
                  <>
                    <div className="w-10 relative ">
                      <Image
                        className=" rounded-full  "
                        fill
                        sizes="24"
                        src={`${session.user?.image}`}
                        alt={`${session.user?.name}`}
                      />
                    </div>
                  </>
                )}
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <a onClick={() => signOut({ callbackUrl: "/" })}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                if (router === "/signin") {
                  return;
                }
                signIn();
              }}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Streaming</a>
      </div>
      <div className="navbar-center hidden md:block">
        <input
          className=" normal-case text-xl m-2 p-2 rounded-md h-8"
          placeholder="Search..."
        />
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 ">
              <Image
                className=" rounded-full"
                fill
                src="https://placeimg.com/80/80/people"
                alt="Avatar"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

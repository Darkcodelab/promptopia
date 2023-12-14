import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function MobileNavProfile({ session }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="sm:hidden flex relative">
      <div className="flex">
        <Image
          src={session?.user.image}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={() => setToggleDropdown((prevState) => !prevState)}
        />

        {toggleDropdown && (
          <div className="dropdown">
            <Link
              href="/profile"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link
              href="/create-prompt"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Create Prompt
            </Link>
            <button
              type="button"
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className="mt-5 w-full black_btn"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

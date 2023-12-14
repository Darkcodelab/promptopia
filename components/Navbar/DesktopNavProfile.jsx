import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function DesktopNavProfile({ session }) {
  return (
    <div className="sm:flex hidden">
      <div className="flex gap-3 md:gap-5">
        <Link href="/create-prompt" className="black_btn">
          Create Post
        </Link>

        <button type="button" className="outline_btn" onClick={signOut}>
          Sign Out
        </button>

        <Link href="/profile">
          <Image
            src={session?.user.image}
            alt="profile"
            width={37}
            height={37}
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import DesktopNavProfile from "./DesktopNavProfile";
import MobileNavProfile from "./MobileNavProfile";
import LoadingSpinner from "../shared/LoadingSpinner";

const Navbar = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    fetchProviders();
  }, []);

  if (sessionStatus === "loading") {
    return (
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 justify-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="logo_text">PromptPalooza</p>
        </Link>

        <div>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn w-[100px]"
                  type="button"
                >
                  <LoadingSpinner />
                </button>
              );
            })}
        </div>
      </nav>
    );
  }

  if (sessionStatus === "unauthenticated") {
    return (
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 justify-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">PromptPalooza</p>
        </Link>

        <div>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                  type="button"
                >
                  Sign In
                </button>
              );
            })}
        </div>
      </nav>
    );
  }

  if (sessionStatus === "authenticated") {
    return (
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 justify-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">PromptPalooza</p>
        </Link>

        <DesktopNavProfile session={session} />
        <MobileNavProfile session={session} />
      </nav>
    );
  }
};
export default Navbar;
